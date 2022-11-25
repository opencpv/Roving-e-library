interface ReaderNavProps {
  title: string;
  chapters: Array<string>;
}
const ReaderNav = ({title,chapters}:ReaderNavProps) => {
  return <nav className="flex p-8 justify-between">
    <div className="w-12 h-12 rounded-full bg-white flex-none"></div>
    <p className="text-white text-lg text-center">Twenty Thousand Leagues Under The Ocean</p>
    <div className="w-12 h-12 rounded-full bg-white"></div>

  </nav>;
};

export default ReaderNav;
