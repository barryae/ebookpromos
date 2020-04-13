import * as React from 'react';

const sendMail = (form: any) => {
    const mailForm: any = document.forms[form]
    const sender = mailForm.elements["sender"].value.trim()
    const email = mailForm.elements["email"].value.trim()
    const subject = mailForm.elements["subject"].value.trim()
    const message = mailForm.elements["message"].value.trim()
    const trap = mailForm.elements["*honeypot"].value

    const formData: any = {
        sender,
        email,
        subject,
        message
    }

    formData["*reply"] = "email"
    formData["*subject"] = "Nouveau message depuis ton site"
    formData["*default_email"] = process.env.ENFORMED_SEND_MAIL_TO

    if (
        process.env.NODE_ENV === "production" &&
        trap === "" &&
        mailForm.checkValidity() &&
        sender !== "" &&
        email !== "" &&
        subject !== null &&
        message !== null
    ) {
        fetch(`https://www.enformed.io/${process.env.ENFORMED_KEY}/`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify(formData),
        })
            .then((response) => response.json())
            .then((data) => {
                mailForm.elements["sender"].value = ""
                mailForm.elements["email"].value = ""
                mailForm.elements["subject"].value = ""
                mailForm.elements["message"].value = ""
            })
            .catch((err) => console.log(err))
    }
}

export default function InfoForm() {
    return (
        <div className='main'>
            Info Form
            <form
                id="contact"
                onSubmit={(e) => {
                    e.preventDefault()
                    const form: any = e.currentTarget.id
                    return sendMail(form)
                }}
            >
                <label htmlFor='name'>Name</label>
                <input
                    type="text"
                    name="sender"
                    id="Name"
                />
                <label htmlFor='email'>Email</label>
                <input
                    type="email"
                    name="email"
                />
                <label htmlFor='subject'>Subject</label>
                <input
                    type="text"
                    name="subject"
                />
                <label htmlFor='message'>Message</label>
                <textarea
                    name="message"
                />
                <input
                    type="hidden"
                    name="*honeypot"
                />
                <label htmlFor='submit'>Submit</label>
                <button />
            </form>
        </div>
    )
}