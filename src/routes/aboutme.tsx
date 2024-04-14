import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/aboutme")({
  component: Aboutme,
});

function Aboutme() {
  return (
    <>
      <main className="mb-20 m-3 mt-5 p-2 my-auto border rounded-3xl bg-green-600">
        <header>
          <h2 className="text-left text-3xl p-5 m-1 text-white">About me</h2>
        </header>
        <article id="about-me" className="">
          <p className="leading-10 text-center p-1 m-1 text-white">
            I’ve spent a year studying Front-End Web Development. Learning the
            basics and applying them to understand core concepts, I hope to be
            able to offer my services for individuals and businesses alike;
            Moreover, perpetually, all aspects of my life involve learning and
            growing.
          </p>
          <p className="leading-10 text-center p-1 m-1 text-white">
            For almost a decade, I have been living in Cairo teaching in the
            British Primary School system. I have worked at 4 schools during my
            time and gained the skills of an effective teacher. Problem solving,
            collaboration, and communication are some of the critical skills
            that I have cultivated during my near decade as an Educator. These
            skills contribute to my work as a web developer.
          </p>
        </article>
      </main>
    </>
  );
}
