import Image from "next/image";
import useAssets from "../../../utils/customHooks/useAssets";
import BookPoints from "../book-points";

interface BookCardProps {
  type: Number;
  title: String;
  img: String;
  author: String;
  genres: Array<string>;
  reads: Number;
  points: Number;
}



const BookCard = ({
  type,
  title,
  img,
  author,
  genres,
  reads,
  points,
}: BookCardProps) => {
  const assets = useAssets();
  return (
    <div className="flex gap-x-4 mt-8 border-b-2 border-white/10 pb-8">
      <div className="relative flex-none h-[140px] w-[100px] rounded-md">
        <Image
          src={assets.trialImage}
          alt="book image"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
      </div>
      <div className="">
        <h1 className="text-md font-bold text-white">{title}</h1>
        <div className="flex justify-between mt-2">
          <h2 className="font-md text-white">{author}</h2>
          <p className="text-white">
            <span className="font-black ">{`${reads}K`} </span>
            reads
          </p>
        </div>
        <div className="flex gap-1 mt-2">
          <p className="bg-[#393F2C] text-sm px-2 py-[1px] rounded-full text-white ">
            {genres[0]}
          </p>
          <p className="bg-[#3F2C2C] text-sm px-2 py-[1px] rounded-full text-white ">
            {genres[1]}
          </p>
          <p className="bg-[#2C3F3A] text-sm px-2 py-[1px] rounded-full text-white ">
            {genres[2]}
          </p>
        </div>
        <div className="flex mt-2  justify-between items-center">
          <BookPoints points={points}/>   
          <div className="flex">
            <button className=" font-bold text-black px-2 bg-white rounded-full  select-none outline-none">
              Read
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
