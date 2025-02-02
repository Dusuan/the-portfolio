import Image from "next/image";

type ProjectTilesProps = {
  title: string;
  description: string;
  image: string;
};

export default function ProjectTiles({
  title,
  image,
  description,
}: ProjectTilesProps) {
  return (
    <div className="flex p-2 w-full h-44">
      <div className="bg-zinc-900 border w-full border-zinc-700 rounded-lg p-4">
        <div className="flex justify-between text-white">
          <div className="">
            <h1 className="text-2xl font-bold">{title}</h1>
            <p className="text-inherit">{description}</p>
          </div>
          <div>
            <Image
              src="diagonal-arrow.svg"
              alt="arrow"
              width={30}
              height={30}
            />
          </div>
        </div>
        <img
          className="rounded-lg"
          src={image}
          width={40}
          height={40}
          alt="project"
        />
      </div>
    </div>
  );
}
