import { useEffect, useRef } from 'react'

type Props = { color: string; depth: string; className?: string; strength?: number }

const VERT = `
attribute vec2 aPos;
varying vec2 vUv;
void main() {
  vUv = vec2(aPos.x * 0.5 + 0.5, 0.5 - aPos.y * 0.5);
  gl_Position = vec4(aPos, 0.0, 1.0);
}`

const FRAG = `
precision highp float;
varying vec2 vUv;
uniform sampler2D uColor;
uniform sampler2D uDepth;
uniform vec2 uShift;
void main() {
  float d = texture2D(uDepth, vUv).r;
  gl_FragColor = texture2D(uColor, vUv + uShift * d);
}`

const load = (src: string) =>
  new Promise<HTMLImageElement>((res, rej) => {
    const img = new Image()
    img.onload = () => res(img)
    img.onerror = rej
    img.src = src
  })

export default function DepthAvatar({ color, depth, className, strength = 0.04 }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const gl = canvas.getContext('webgl')
    if (!gl) return

    let raf = 0
    let cancelled = false
    let tx = 0, ty = 0, cx = 0, cy = 0

    // ---- A: compile the two tiny GPU programs ----
    const compile = (type: number, src: string) => {
      const s = gl.createShader(type)!
      gl.shaderSource(s, src)
      gl.compileShader(s)
      return s
    }
    const prog = gl.createProgram()!
    gl.attachShader(prog, compile(gl.VERTEX_SHADER, VERT))
    gl.attachShader(prog, compile(gl.FRAGMENT_SHADER, FRAG))
    gl.linkProgram(prog)
    gl.useProgram(prog)

    const buf = gl.createBuffer()
    gl.bindBuffer(gl.ARRAY_BUFFER, buf)
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), gl.STATIC_DRAW)
    const aPos = gl.getAttribLocation(prog, 'aPos')
    gl.enableVertexAttribArray(aPos)
    gl.vertexAttribPointer(aPos, 2, gl.FLOAT, false, 0, 0)

    const uShift = gl.getUniformLocation(prog, 'uShift')
    gl.uniform1i(gl.getUniformLocation(prog, 'uColor'), 0)
    gl.uniform1i(gl.getUniformLocation(prog, 'uDepth'), 1)

    // ---- B: turn the two images into GPU textures ----
    const makeTexture = (unit: number, img: HTMLImageElement, premultiply: boolean) => {
      gl.activeTexture(gl.TEXTURE0 + unit)
      gl.bindTexture(gl.TEXTURE_2D, gl.createTexture())
      gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, premultiply)
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE)
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE)
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR)
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR)
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, img)
    }

    // ---- C: draw every frame, easing toward the mouse ----
    const tick = () => {
      cx += (tx - cx) * 0.06
      cy += (ty - cy) * 0.06
      gl.uniform2f(uShift, cx, cy)
      gl.clearColor(0, 0, 0, 0)
      gl.clear(gl.COLOR_BUFFER_BIT)
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4)
      raf = requestAnimationFrame(tick)
    }

    Promise.all([load(color), load(depth)]).then(([c, d]) => {
      if (cancelled) return
      canvas.width = c.naturalWidth
      canvas.height = c.naturalHeight
      gl.viewport(0, 0, canvas.width, canvas.height)
      makeTexture(0, c, true)
      makeTexture(1, d, false)
      tick()
    })

    const onMove = (e: PointerEvent) => {
      tx = (e.clientX / window.innerWidth * 2 - 1) * strength
      ty = -(e.clientY / window.innerHeight * 2 - 1) * strength
    }
    window.addEventListener('pointermove', onMove)

    return () => {
      cancelled = true
      cancelAnimationFrame(raf)
      window.removeEventListener('pointermove', onMove)
    }
  }, [color, depth, strength])

  return <canvas ref={canvasRef} className={className} />
}