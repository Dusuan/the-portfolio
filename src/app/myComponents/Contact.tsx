import {z} from "zod";

const mySchema = z.string();

export default function () {
  return (
    <div>
      <div className="mt-10 text-center lg:text-start">
        <p className="m-0 text-5xl md:text-6xl font-extrabold">SEND ME A </p>
        <p className="m-0 text-5xl md:text-6xl font-extrabold mb-6 text-zinc-600">
          MESSAGE
        </p>{" "}
      </div>

      <div>

      </div>

    </div>
  );
}
