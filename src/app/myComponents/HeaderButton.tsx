import Link from "next/link";

type ButtonProps = {
  text: string;
  href: string;
};

export default function Button({ text, href }: ButtonProps) {
  return (
    <div className="font-mono text-neutral-400 bg-neutral-900 rounded-md p-1 m-1">
      <Link href={href}>
        <p>{text}</p>
      </Link>
    </div>
  );
}
