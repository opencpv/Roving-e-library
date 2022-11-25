import Image from "next/image";
import useAssets from "../../../utils/customHooks/useAssets";
import BookPoints from "../../shared/book-points";
import CatalogueText from "../../shared/catalogue-text";
import GenrePillGroup from "../../shared/genre-pill-group";
import BookCover from "../book-cover";

interface BookLandingProps {
  author: string;
  reads: number;
  points: number;
}
const BookLanding = ({ author, reads, points }: BookLandingProps) => {
  const genres = [
    { genre: "action", color: "#393F2C" },
    { genre: "adventure", color: "#3F2C2C" },
    { genre: "fantasy", color: "#2C3F3A" },
  ];

  const assets = useAssets();
  return (
    <>
      <BookCover title={"Twenty leagues"} img={"some image"} />
      <section className="px-5 py-6">
        <CatalogueText text={"Twenty Thousand Leagues Under The Sea"} />
        <div className="flex justify-between items-center mt-3">
          <GenrePillGroup genres={genres} />
          <BookPoints points={points} />
        </div>
        <div className="mt-4"></div>

        <button className="w-full rounded-md font-black py-2 mt-3 bg-white">
          Read
        </button>
        <div className="flex justify-between mt-6 text-lg">
          <h2 className="font-md text-white  ">{author}</h2>
          <p className="text-white">
            <span className="font-black ">{`${reads}K`} </span>
            reads
          </p>
        </div>
        <p className="text-white mt-8">
          Sent to investigate mysterious encounters that are disrupting
          international shipping, Professor Aronnax, his servant Conseil, and
          disgruntled harpooner Ned Land are captured when their frigate is sunk
          during an encounter with the "monster." The submarine Nautilus and its
          eccentric Captain Nemo afford the professor and his companions endless
          fascination and danger as they're swept along on a yearlong undersea
          voyage.
        </p>
        <CatalogueText text={"Related Books"} />
        <div className="grid grid-cols-3 gap-4 mt-4">
          <div className="relative flex-none h-[180px] w-[120px] rounded-md">
            <Image
              src={assets.trialImage}
              alt="book image"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
            />
          </div>
          <div className="relative flex-none h-[180px] w-[120px] rounded-md">
            <Image
              src={assets.trialImage}
              alt="book image"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
            />
          </div>
          <div className="relative flex-none h-[180px] w-[120px] rounded-md">
            <Image
              src={assets.trialImage}
              alt="book image"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
            />
          </div>
          <div className="relative flex-none h-[180px] w-[120px] rounded-md">
            <Image
              src={assets.trialImage}
              alt="book image"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
            />
          </div>
          <div className="relative flex-none h-[180px] w-[120px] rounded-md">
            <Image
              src={assets.trialImage}
              alt="book image"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
            />
          </div>
          <div className="relative flex-none h-[180px] w-[120px] rounded-md">
            <Image
              src={assets.trialImage}
              alt="book image"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default BookLanding;
