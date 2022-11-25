import Image from "next/image";
import useAssets from "../../../utils/customHooks/useAssets";

interface LandingSwiperCardProps {
  title: String;
  img: String;
}
const LandingSwiperCard = ({ title, img }: LandingSwiperCardProps) => {
  const assets = useAssets();

  return (
    <div className="relative h-[250px] w-[160px] rounded-md">
      <Image
        alt={`${title} cover image`}
        src={"https://roving-library-api.onrender.com/category_img/action.jpg"}
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        className="rounded-md"
      />
    </div>
  );
};

export default LandingSwiperCard;
