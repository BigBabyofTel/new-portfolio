import { Fragment } from "react/jsx-runtime";
import { ReactMatrixAnimation } from "react-matrix-animation" 
//images for contact icons

import avatar from "@/assets/avatar.png";
//route
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/') ({
    component: HomeComponent,
})

function HomeComponent () {

  return (
    <Fragment>
      <header className="h-full w-screen mt-2 p-2 ">
        <section className="border-4 p-4 flex rounded-3xl bg-green-700">
          <figure className="w-1/2 ">
            <img src={avatar} alt="avatar profile" className="rounded-3xl w-full p-2 bg-green-300"/>
          </figure>
          <figcaption className="flex flex-col justify-between p-5">
            <h1 className="text-3xl text-center">T. Augustus Baker</h1>
            <h2 className="text-1xl text-center p-2 border rounded-2xl bg-green-300">
              Aspiring Web Dev
            </h2>
          </figcaption>
        </section>
      </header> 
        <main className="h-[500px] w-full rounded-3xl p-3 mb-20">
          <ReactMatrixAnimation tileSet={[
            "漢",
            "字",
            " ひ",
            "ら",
            "が",
            "な",
            "カ",
            "タ",
            "カ",
            "ナ",
            "ひ",
            "ら",
            "が",
            "な",
            "漢",
            "字",
            "カ",
            "タ",
            "カ",
            "ナ",
            " ひ",
            "ら",
            "が",
            "な",
            "漢",
            "字",
            " ひ",
            "ら",
            "が",
            "な",
            " カ",
            "タ",
            "カ",
            "ナ",
            "漢",
            "字",
            "ひ",
            "ら",
            "が",
            "な",
            " カ",
            "タ",
            "カ",
            "ナ",
            "漢",
            "字 ",
            "ひ",
            "ら",
            "が",
            "な ",
            "カ",
            "タ",
            "カ",
            "ナ",
          ]}/>
        </main>
    </Fragment>
  );
}