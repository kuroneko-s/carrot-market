import Image from "next/image";

export interface ItemProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
  price: string;
  location: string;
  like: number;
  chat: number;
}

export default function Item({
  imageSrc,
  imageAlt,
  title,
  price,
  location,
  like,
  chat,
}: ItemProps) {
  return (
    <div className="space-y-1 cursor-pointer">
      {/* <div className="relative">
        <Image src={imageSrc} alt={imageAlt} layout="fill" placeholder="blur" />
      </div> */}
      <div className="relative bg-slate-400 w-48 h-48  rounded-md shadow-sm"></div>
      <p className="text-sm">{title}</p>
      <p className="text-[0.75rem] font-bold">{price}원</p>
      <p className="text-gray-700 text-[0.65rem]">{location}</p>
      <div className="flex flex-row jus  text-gray-600 text-[0.65rem] space-x-0.5">
        <span>관심</span>
        <span>{like}</span>
        <span>⋅</span>
        <span>채팅</span>
        <span>{chat}</span>
      </div>
    </div>
  );
}
