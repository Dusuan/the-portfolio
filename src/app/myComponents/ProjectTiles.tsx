import Image from "next/image";

type ProjectTilesProps = {
  title: string;
  description: string;
  image: string;
  link: string;
};

export default function ProjectTiles({
  title,
  image,
  description,
  link,
}: ProjectTilesProps) {
  return (
    <a href={link} target="_blank" rel="noreferrer">
      <div className="flex py-2 w-full h-44">
        <div className="w-full bg-neutral-900 group hover:bg-neutral-800 duration-200 ease-out rounded-lg p-4">
          <div className="flex justify-between text-white">
            <div className="flex items-center">
              <div>
                <img
                  className="rounded-lg max-h-[125px] max-w-[125px] "
                  src={image}
                  width={125}
                  height={125}
                  alt="project"
                />
              </div>
              <div className="mx-8">
                <h1 className="text-2xl font-bold">{title}</h1>
                <p className="font-mono text-inherit text-neutral-400">
                  {description}
                </p>
              </div>
            </div>

            <div className="group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform duration-200 ">
              <Image
                src="/diagonal-arrow.svg"
                alt="arrow"
                width={30}
                height={30}
                className="w-8 h-8"
              />
            </div>
          </div>
        </div>
      </div>
    </a>
  );
}
