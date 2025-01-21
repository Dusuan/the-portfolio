import Link from "next/link";

type ButtonProps = {
  text: string;
  href: string;
};

export default function Button({text, href}: ButtonProps) {
  return (
    <div>
      <p>{text}</p>
      <Link href={href}></Link>
    </div>
  );
}
