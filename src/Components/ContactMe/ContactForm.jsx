import emailjs from "@emailjs/browser";
import React, { useRef, useState } from "react";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sucess, setSucess] = useState("");
  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleMessage = (e) => {
    setMessage(e.target.value);
  };
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_s5c7a93", "template_ufbwqna", form.current, {
        publicKey: "bBUz6y_cbxk2Chv9g",
      })
      .then(
        () => {
          setName('')
          setEmail('')
          setMessage('')
          setSucess('Message Sent!')
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div>
      <p className="text-cyan-400">{ sucess}</p>
      <form className="flex flex-col gap-4 " ref={form} onSubmit={sendEmail}>
        <input
          className="h-12 bg-stone-500 border-[1px] rounded-md px-2 outline-none"
          placeholder="Your Name"
          name="from_name"
          required
          type="text"
          value={name}
          onChange={handleName}
        />
        <input
          form="from_email"
          className="h-12 bg-stone-500 border-[1px] rounded-md px-2 outline-none"
          placeholder=" Your Email"
          required
          value={email}
          onChange={handleEmail}
          type="emai"
        />
        <textarea
          value={message}
          name="message"
          required
          rows="9"
          cols="50"
          className="h-12 bg-stone-500 border-[1px] rounded-md px-2 outline-none"
          onChange={handleMessage}
          type="text"
          placeholder="Message"
        />
        <button
          className="w-full rounded-lg border-cyan-400 border-[1px] font-bold text-white text-xl hover:bg-cyan-400 transition-all duration-500"
          type="submit"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
