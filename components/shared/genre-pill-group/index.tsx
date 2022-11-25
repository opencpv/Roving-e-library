import GenrePill from "../genre-pill";

interface GenrePillGroupProps {
  genres: Array<{ genre: string, color: string }>;
}
const GenrePillGroup = ({ genres }: GenrePillGroupProps) => {
  return <div className="flex gap-1 xl:gap-4">
    {genres && genres.map((data, index: number) => <GenrePill key={index} genre={data.genre} color={data.color} />)}
  </div>;
};

export default GenrePillGroup;
