import type { NextPage } from "next";
import { LeftSection } from "../components/LeftSection";
import { RightSection } from "../components/RightSection";

const Home: NextPage = () => {
  return (
    <div className="min-h-screen min-w-screen flex items-center justify-center bg-slate-300 overflow-auto">
      <div className="max-w-4xl w-full shadow-md bg-white shadow-gray-400 rounded-md flex flex-col md:flex-row">
        <LeftSection />
        <RightSection />
      </div>
    </div>
  );
};

export default Home;
