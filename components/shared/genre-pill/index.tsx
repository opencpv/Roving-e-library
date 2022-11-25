import Link from "next/link";

interface GenrePillProps {
  genre: String;
  color: String;
}
const GenrePill = ({genre,color}:GenrePillProps) => {
  return <Link href={"/"} className={`bg-[${color}] text-sm px-2 py-[1px] rounded-full text-white`}>
    {genre}
  </Link>;
};

export default GenrePill;
