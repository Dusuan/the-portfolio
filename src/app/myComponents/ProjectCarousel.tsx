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
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import ProjectTiles from "./ProjectTiles";

const projects = [
  {
    title: "Project 1",
    description: "This is a description for project 1",
    image: "/dusuanpelon.jpg",
  },
  {
    title: "Project 2",
    description: "This is a description for project 2",
    image: "/dusuan1.jpg",
  },
  {
    title: "Project 3",
    description: "This is a description for project 3",
    image: "/dusuanA.jpg",
  },
];

export default function ProjectCarousel() {
  return (
    <div className="flex flex-col justify-center">
      <div className="mt-2 text-center lg:text-start">
        <p className="m-0 text-5xl md:text-6xl font-extrabold">RECENT </p>
        <p className="m-0 text-5xl md:text-6xl font-extrabold mb-6 text-zinc-600">
          PROJECTS
        </p>{" "}
      </div>
      <div className="flex lg:hidden justify-center my-10">
        <Carousel className="max-w-64">
          <CarouselContent className="min-h-96">
            {projects.map((project, index) => (
              <CarouselItem key={index} className="h-full w-32">
                <Card className="bg-zinc-900 border border-zinc-700">
                  <CardHeader className="text-white">
                    <CardTitle>{project.title}</CardTitle>
                    <CardDescription className="text-inherit">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="">
                    <img
                      className="rounded-lg"
                      src={project.image}
                      alt="project"
                    />
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="border-zinc-600 bg-zinc-800" />
          <CarouselNext className="border-zinc-600 bg-zinc-800" />
        </Carousel>
      </div>
      <div className="hidden lg:flex lg:flex-col justify-center">
        {projects.map((project, index) => (
          <ProjectTiles description={project.description} title={project.title} image={project.image} />
        ))}
      </div>
    </div>
  );
}
