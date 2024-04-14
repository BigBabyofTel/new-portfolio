//images for contact
import github from "@/assets/github-l.svg";
import outlook from "@/assets/outlook.svg";
import linkedin from "@/assets/linkedin-l.svg";
import discord from "@/assets/discord-l.svg";

import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";
import { useZorm } from "react-zorm";

export const Route = createFileRoute("/contact")({
  component: Contact,
});

//type definitions
interface Contact {
  id: number;
  account: string;
  url: string;
  svgComponent: string;
}
const formSchema = z.object({
  name: z.string().min(4).max(20),
  email: z.string().email(),
  message: z.string().min(10).max(150),
});

function ErrorMessage(props: { message: string }) {
  return <div className="error-message">{props.message}</div>;
}

function Contact() {
  const contacts: Contact[] = [
    {
      id: 0,
      account: "GitHub",
      url: "https://github.com/BigBabyofTel",
      svgComponent: github,
    },
    {
      id: 1,
      account: "Outlook",
      url: "mailto:augustus.tb@outlook.com",
      svgComponent: outlook,
    },
    {
      id: 3,
      account: "LinkedIn",
      url: "https://www.linkedin.com/in/taugustusb",
      svgComponent: linkedin,
    },
    {
      id: 4,
      account: "Discord",
      url: "https://discordapp.com/users/1089614219600732160",
      svgComponent: discord,
    },
  ];

  const displayContact = contacts.map((contact) => (
    <figure key={contact.id} className="">
      <a href={contact.url}>
        <img
          src={contact.svgComponent}
          className="w-1/2 mx-auto my-2 lg:w-1/4"
        />
      </a>
    </figure>
  ));
  const zo = useZorm("contact-form", formSchema, {
    onValidSubmit(e) {
      e.preventDefault();
      alert("Form ok!\n" + JSON.stringify(e.data, null, 2));
    },
  });
  const disabled = zo.validation?.success === false;

  return (
    <>
      <article
        id="contact"
        className=" border m-5 p-5 rounded-3xl bg-green-600"
      >
        <h2 className="text-3xl">Contact</h2>
        <section className="m-5">
          <form ref={zo.ref} id="contact-form" className="flex flex-col">
            <input
              placeholder="Name"
              type="text"
              name={zo.fields.name()}
              className={zo.errors.name("errored")}
            />
            {zo.errors.name((e) => (
              <ErrorMessage message={e.message} />
            ))}
            <br />
            <input
            placeholder="Email"
              type="email"
              name={zo.fields.email()}
              className={zo.errors.email("errored")}
            />
            {zo.errors.email((e) => (
              <ErrorMessage message={e.message} />
            ))}
            <br />
            Leave a message:
            <textarea
              name={zo.fields.message()}
              className={zo.errors.message("errored")}
            ></textarea>
            {zo.errors.message((e) => (
              <ErrorMessage message={e.message} />
            ))}
            <button
              disabled={disabled}
              type="submit"
              className="border bg-white m-5 p-2"
            >
              Send
            </button>
          </form>
        </section>
        <section className="flex">{displayContact}</section>
      </article>
    </>
  );
}
