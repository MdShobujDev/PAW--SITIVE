import Image from "next/image";

type CardProps = {
  title: string;
  description: string[];
  image: string;
};
function Card({ title, description, image }: CardProps) {
  return (
    <div>
      <div>
        <Image className=" w-full aspect-video" src={image} alt="card image" />
      </div>
      <div>
        <h2 className=" text-amber-500 mb-2">{title}</h2>
        <ul className=" list-disc list-inside text-sm flex flex-col gap-3">
          {description}
        </ul>
      </div>
    </div>
  );
}

export default Card;
