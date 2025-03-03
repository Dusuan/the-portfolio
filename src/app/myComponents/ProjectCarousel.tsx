import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../components/ui/carousel";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import ProjectTiles from "./ProjectTiles";
import Image from "next/image";

const projects = [
  {
    title: "Rock Fundadores Movile App",
    description: "Inventory management app for a local business",
    image: "/rf.png",
    link: "https://github.com/Dusuan/RockFundadores-APP",
  },
  {
    title: "GitAutoProjects",
    description: "API that scrapes GitHub repositories and returns a list of pinned projects",
    image: "/gittthub.png",
    link: "https://github.com/Dusuan/gitautoproyects",
  },
  {
    title: "SDG's Challenge",
    description: "App developed to help kids learn about the SDG's, developed for the SpaceApps Hackathon", 
    image: "/sdgs.png",
    link: "https://github.com/Dusuan/SpaceAppsHackathon",
  },
];

export default function ProjectCarousel() {
  return (
    <div className="flex flex-col justify-center">
      <div className="mt-2 text-center lg:text-start">
        <p className="m-0 text-5xl md:text-6xl xl:text-7xl font-extrabold">
          RECENT{" "}
        </p>
        <p className="m-0 text-5xl md:text-6xl xl:text-7xl font-extrabold mb-6 text-neutral-600">
          PROJECTS
        </p>{" "}
      </div>
      <div className="min-h-96 flex lg:hidden justify-center my-10">
        <Carousel className="max-w-64 min-h-96">
          <CarouselContent className="min-h-96 items-center">
            {projects.map((project, index) => (
              <CarouselItem key={index} className="min-h-96 w-32">
                <Card className="flex flex-col items-center bg-neutral-900 border h-full border-neutral-700">
                  <CardHeader className="text-white">
                    <CardTitle>{project.title}</CardTitle>
                    <CardDescription className="text-inherit">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="items-center" >
                    <Image
                      className="rounded-lg"
                      src={project.image}
                      alt="project"
                      width={200}
                      height={400}
                    />
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="border-neutral-600 bg-neutral-800" />
          <CarouselNext className="border-neutral-600 bg-neutral-800" />
        </Carousel>
      </div>
      <div className="hidden lg:flex lg:flex-col justify-center">
        {projects.map((project, index) => (
          <ProjectTiles
            key={index}
            description={project.description}
            title={project.title}
            image={project.image}
            link={project.link}
          />
        ))}
      </div>
    </div>
  );
}
