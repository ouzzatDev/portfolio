"use client";

import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const [error, setError] = useState<null | boolean>(null);
  const [isLoading, setIsLoading] = useState(false);

  const formRef = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (formRef.current !== null) {
      setIsLoading(true);
      emailjs
        .sendForm(
          "service_2hse2w8",
          "template_p7clbxp",
          formRef.current,
          "mqKHMmNc9RQgUKHv7"
        )
        .then(
          () => {
            setError(false);
            formRef.current?.reset();
            setIsLoading(false);
          },
          () => {
            setError(true);
            setIsLoading(false);
          }
        );
    }
  };

  return (
    <form
      ref={formRef}
      onSubmit={sendEmail}
      className="flex flex-col gap-3 md:mt-8 mt-12"
    >
      <input
        type="text"
        name="name"
        placeholder="Name *"
        className="z-10 input"
        required
      />
      <input
        type="text"
        name="email"
        placeholder="Email *"
        className="z-10 input"
        required
      />
      <input
        type="text"
        name="subject"
        placeholder="Your Subject *"
        className="z-10 input"
        required
      />
      <textarea
        name="message"
        placeholder="Your Message *"
        className="z-10 input"
        rows={6}
        required
      ></textarea>
      <button className="btn btn-white bg-gradient z-10" disabled={isLoading}>
        {isLoading ? "Sending..." : "Send Message"}{" "}
      </button>

      {error === null ? null : error === false ? (
        <p className="text-green font-medium mt-3">
          Your message has sent successfully.
        </p>
      ) : (
        <p className="text-red-500 font-medium mt-3">
          Error! Please try again.
        </p>
      )}
    </form>
  );
};

export default ContactForm;
