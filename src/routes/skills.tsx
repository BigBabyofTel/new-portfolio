import { createFileRoute } from "@tanstack/react-router";
//images
import bun from "@/assets/bun1.svg";
import vite from "@/assets/vite.svg";
import ts from "@/assets/typescript.svg";
import js from "@/assets/js.svg";
import html from "@/assets/html-5.svg";
import css from "@/assets/css-3.svg";
import tailwind from "@/assets/tailwind.svg";
import bootstrap from "@/assets/bootstrap.svg";
import redux from "@/assets/redux.svg";
import react from "@/assets/react.svg";
import next from "@/assets/next-js-svgrepo-com.svg";
//component imports
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "../components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const Route = createFileRoute("/skills")({
  component: Skills,
});

function Skills() {
  return (
    <>
      <article id="skills" className=" text-center m-5 shrink">
        <div className="border rounded-3xl bg-green-600">
          <h2 className="text-left text-3xl pl-6 pt-3 ">Skills</h2>
          <Carousel
            className="h-1/2 w-auto m-3 lg:flex lg:items-center"
            plugins={[
              Autoplay({
                delay: 1500,
                stopOnInteraction: false,
              }),
            ]}
          >
            <CarouselContent className="m-3">
              <CarouselItem>
                <Card className="w-3/4 shadow-xl mx-auto bg-green-400">
                  <CardHeader>
                    <CardTitle>HTML</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <img src={html} className="w-1/4 mx-auto" />
                  </CardContent>
                </Card>
              </CarouselItem>
              <CarouselItem>
                <Card className="w-3/4 shadow-2xl h-auto mx-auto bg-green-400">
                  <CardHeader>
                    <CardTitle>CSS</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <img src={css} className="w-1/4 mx-auto" />
                  </CardContent>
                </Card>
              </CarouselItem>
              <CarouselItem>
                <Card className="w-3/4 shadow-2xl h-auto mx-auto bg-green-400">
                  <CardHeader>
                    <CardTitle>Bootstrap</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <img src={bootstrap} className="w-1/4 mx-auto" />
                  </CardContent>
                </Card>
              </CarouselItem>
            </CarouselContent>
          </Carousel>
          <Carousel
            className="h-1/4 m-3 w-auto lg:flex lg:items-center"
            plugins={[
              Autoplay({
                delay: 1500,
                stopOnInteraction: false,
              }),
            ]}
          >
            <CarouselContent className="m-3">
              <CarouselItem>
                <Card className="w-3/4 shadow-2xl h-auto mx-auto bg-green-400">
                  <CardHeader>
                    <CardTitle>JavaScript</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <img src={js} className="w-1/4 mx-auto" />
                  </CardContent>
                </Card>
              </CarouselItem>
              <CarouselItem>
                <Card className="w-3/4 shadow-2xl h-auto mx-auto bg-green-400">
                  <CardHeader>
                    <CardTitle>TypeScript</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <img src={ts} className="w-1/4 mx-auto" />
                  </CardContent>
                </Card>
              </CarouselItem>
              <CarouselItem>
                <Card className="w-3/4 shadow-2xl h-auto mx-auto bg-green-400">
                  <CardHeader>
                    <CardTitle>React</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <img src={react} className="w-1/4 mx-auto" />
                  </CardContent>
                </Card>
              </CarouselItem>
              <CarouselItem>
                <Card className="w-3/4 shadow-2xl h-auto mx-auto bg-green-400">
                  <CardHeader>
                    <CardTitle>Next</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <img src={next} className="w-1/4 mx-auto" />
                  </CardContent>
                </Card>
              </CarouselItem>
            </CarouselContent>
          </Carousel>
          <Carousel
            className="h-1/4 m-3 lg:flex lg:items-center"
            plugins={[
              Autoplay({
                delay: 1500,
                stopOnInteraction: false,
              }),
            ]}
          >
            <CarouselContent className="m-3">
              <CarouselItem>
                <Card className="w-3/4 shadow-2xl h-auto mx-auto bg-green-400">
                  <CardHeader>
                    <CardTitle>TailwindCSS</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <img src={tailwind} className="w-1/4 mx-auto " />
                  </CardContent>
                </Card>
              </CarouselItem>
              <CarouselItem>
                <Card className="w-3/4 shadow-2xl h-auto mx-auto bg-green-400">
                  <CardHeader>
                    <CardTitle>Redux</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <img src={redux} className="w-1/4 mx-auto" />
                  </CardContent>
                </Card>
              </CarouselItem>
              <CarouselItem>
                <Card className="w-3/4 shadow-2xl h-auto mx-auto bg-green-400">
                  <CardHeader>
                    <CardTitle>Bun</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <img src={bun} className="w-1/4 mx-auto" />
                  </CardContent>
                </Card>
              </CarouselItem>
              <CarouselItem>
                <Card className="w-3/4 shadow-2xl h-auto mx-auto bg-green-400">
                  <CardHeader>
                    <CardTitle>Vite</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <img src={vite} className="w-1/4 mx-auto" />
                  </CardContent>
                </Card>
              </CarouselItem>
            </CarouselContent>
          </Carousel>
        </div>
      </article>
    </>
  );
}
