import {z} from "zod";

const mySchema = z.string();

export default function () {
  return (
    <div id="contact">
      <div className="mt-10 text-center lg:text-start">
        <p className="m-0 text-5xl md:text-6xl font-extrabold">SEND ME A </p>
        <p className="m-0 text-5xl md:text-6xl font-extrabold mb-6 text-zinc-600">
          MESSAGE
        </p>{" "}
      </div>

      <div className="h-screen bg-green-150">
      what
      </div>

    </div>
  );
}
