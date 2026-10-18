const EMAIL = "vaddekirato@gmail.com";

function sendMail(subject: string, body = "") {
  window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export function Contact(){
    sendMail("Hey");
    return(
        <h1>Hi!</h1>
    )
}