import Image from "next/image";
interface IconProps {
  alt: string;
  src: string;
  w: number;
  h: number;
}

export default function Icon({ alt, src, w, h }: IconProps) {
  return (
    <div className={`relative w-${w} h-${h}`}>
      <Image alt={alt} src={src} layout="fill" objectFit="contain" className="text-white" />
    </div>
  );
}
