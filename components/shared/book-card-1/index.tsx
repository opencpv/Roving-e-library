import Image from "next/image";
import useAssets from "../../../utils/customHooks/useAssets";
import BookPoints from "../book-points";

interface BookCardProps {
  type: number;
  title: string;
  img: string;
  author: string;
  genres: Array<string>;
  reads: number;
  points: number;
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
    <div className="flex w-full gap-x-4 pb-6 xl:p-2 border-b-2 xl:border-r-2 xl:border-b-0  border-white/30 xl:pr-6">
      <div className="relative flex-none h-[154px] w-[110px]  xl:h-[280px] xl:w-[200px] rounded-md ">
        <Image
          src={assets.trialImage}
          alt="book image"
          className="rounder-md"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
      </div>
      <div className="">
        <h1 className="text-md xl:text-2xl font-bold text-white">{title}</h1>
        <div className="flex justify-between mt-2">
          <h2 className="text-md xl:text-xl text-white">{author}</h2>
          <p className="text-white">
            <span className="font-black text-md xl:text-xl ">{`${reads}K`} </span>
            reads
          </p>
        </div>
        <div className="flex flex-wrap gap-1 mt-2">
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
        <div className="flex mt-4  justify-between items-center">

          <button className="w-full py-1 font-bold text-lg text-black px-2 bg-white rounded-md select-none outline-none">
            Read
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
