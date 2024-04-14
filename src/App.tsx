import { Fragment } from "react/jsx-runtime";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "./components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
//imports for all images in skills
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
//images for contact icons

import avatar from "@/assets/avatar.png";

//Tanstack Query
/*
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
*/



/*
//Create a client
const queryClient = new QueryClient();
*/

/* to go in App component when used
<QueryClientProvider client={queryClient}>
      <Main />
    </QueryClientProvider>

*/

//New parent component
export const App = () => {
  return (
    <Main/>
  );
};



//main app component
export function Main() {


  return (
    <Fragment>
      <header className="h-full w-screen p-1">
        <section className="border p-4 m-1 flex rounded-3xl">
          <figure className="w-1/2 border rounded-3xl mr-6 bg-slate-200">
            <img src={avatar} alt="avatar profile" className="w-1/2 p-1 ml-9" />
          </figure>
          <figcaption className="flex flex-col justify-center ">
            <h1 className="text-2xl m-1">T. Augustus Baker</h1>
            <h2 className="text-1xl text-center p-2 border rounded-2xl bg-slate-200">
              Aspiring Web Dev
            </h2>
          </figcaption>
        </section>
      </header>
      <main className="">
        <section>
        
          <article
            id="skills"
            className="text-center m-2 p-3 border rounded-3xl"
          >
            <h2>Skills</h2>
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
                  <Card className="w-3/4 shadow-xl mx-auto bg-[#005a7d] text-[#9bcbd7] dark:text-[#bf907e] lg:w-1/2 dark:shadow-white dark:shadow-inner">
                    <CardHeader>
                      <CardTitle>HTML</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <img src={html} className="w-1/4 mx-auto" />
                    </CardContent>
                  </Card>
                </CarouselItem>
                <CarouselItem>
                  <Card className="w-3/4 shadow-2xl h-auto mx-auto bg-[#005a7d] text-[#9bcbd7] dark:text-[#bf907e] lg:w-1/2 dark:shadow-white dark:shadow-inner">
                    <CardHeader>
                      <CardTitle>CSS</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <img src={css} className="w-1/4 mx-auto" />
                    </CardContent>
                  </Card>
                </CarouselItem>
                <CarouselItem>
                  <Card className="w-3/4 shadow-2xl h-auto mx-auto bg-[#005a7d] text-[#9bcbd7] dark:text-[#bf907e] lg:w-1/2  dark:shadow-white dark:shadow-inner">
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
                  <Card className="w-3/4 shadow-2xl h-auto mx-auto bg-[#005a7d] text-[#9bcbd7] dark:text-[#bf907e] lg:w-1/2 dark:shadow-white dark:shadow-inner">
                    <CardHeader>
                      <CardTitle>JavaScript</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <img src={js} className="w-1/4 mx-auto" />
                    </CardContent>
                  </Card>
                </CarouselItem>
                <CarouselItem>
                  <Card className="w-3/4 shadow-2xl h-auto mx-auto bg-[#005a7d] text-[#9bcbd7] dark:text-[#bf907e] lg:w-1/2  dark:shadow-white dark:shadow-inner">
                    <CardHeader>
                      <CardTitle>TypeScript</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <img src={ts} className="w-1/4 mx-auto" />
                    </CardContent>
                  </Card>
                </CarouselItem>
                <CarouselItem>
                  <Card className="w-3/4 shadow-2xl h-auto mx-auto bg-[#005a7d] text-[#9bcbd7] dark:text-[#bf907e] lg:w-1/2  dark:shadow-white dark:shadow-inner">
                    <CardHeader>
                      <CardTitle>React</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <img src={react} className="w-1/4 mx-auto" />
                    </CardContent>
                  </Card>
                </CarouselItem>
                <CarouselItem>
                  <Card className="w-3/4 shadow-2xl h-auto mx-auto bg-[#005a7d] text-[#9bcbd7] dark:text-[#bf907e] lg:w-1/2  dark:shadow-white dark:shadow-inner">
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
                  <Card className="w-3/4 shadow-2xl h-auto mx-auto bg-[#005a7d] text-[#9bcbd7] dark:text-[#bf907e] lg:w-1/2  dark:shadow-white dark:shadow-inner">
                    <CardHeader>
                      <CardTitle>TailwindCSS</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <img src={tailwind} className="w-1/4 mx-auto" />
                    </CardContent>
                  </Card>
                </CarouselItem>
                <CarouselItem>
                  <Card className="w-3/4 shadow-2xl h-auto mx-auto bg-[#005a7d] text-[#9bcbd7] dark:text-[#bf907e] lg:w-1/2  dark:shadow-white dark:shadow-inner">
                    <CardHeader>
                      <CardTitle>Redux</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <img src={redux} className="w-1/4 mx-auto" />
                    </CardContent>
                  </Card>
                </CarouselItem>
                <CarouselItem>
                  <Card className="w-3/4 shadow-2xl h-auto mx-auto bg-[#005a7d] text-[#9bcbd7] dark:text-[#bf907e] lg:w-1/2 dark:shadow-white dark:shadow-inner">
                    <CardHeader>
                      <CardTitle>Bun</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <img src={bun} className="w-1/4 mx-auto" />
                    </CardContent>
                  </Card>
                </CarouselItem>
                <CarouselItem>
                  <Card className="w-3/4 shadow-2xl h-auto mx-auto bg-[#005a7d] text-[#9bcbd7] dark:text-[#bf907e] lg:w-1/2 dark:shadow-white dark:shadow-inner">
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
          </article>
          
        </section>
      </main>
      <footer className="border-4 mb-16 p-3">
        <h2 className="text-left">By T. Augustus Baker</h2>
      </footer>
    </Fragment>
  );
}
