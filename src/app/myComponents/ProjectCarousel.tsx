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

const projects = [
  {
    title: "Project 1",
    description: "This is a description for project 1",
    image: "/dusuanA.jpg",
  },
  {
    title: "Project 2",
    description: "This is a description for project 2",
    image: "/dusuanA.jpg",
  },
  {
    title: "Project 3",
    description: "This is a description for project 3",
    image: "/dusuanA.jpg",
  },
];

export default function ProjectCarousel() {
  return (
    <div className="flex justify-center">
      <Carousel className="max-w-64">
        <CarouselContent>
          {projects.map((project, index) => (
            <CarouselItem key={index} className="">
              <Card className="bg-zinc-900 border border-zinc-700">
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <img src={project.image} alt="project" />
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent >
        <CarouselPrevious className="border-zinc-600 bg-zinc-800"/>
        <CarouselNext className="border-zinc-600 bg-zinc-800"/>
      </Carousel>
    </div>
  );
}
