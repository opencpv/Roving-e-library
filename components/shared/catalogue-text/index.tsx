interface CatalogueTextProps {
  text: String;
}
const CatalogueText = ({ text }: CatalogueTextProps) => {

  return <h1 className="mt-14 mb-6 text-2xl text-white font-black">{text}</h1>;
};

export default CatalogueText;
