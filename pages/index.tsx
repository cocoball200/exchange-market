import type { NextPage } from "next";
import Forms from "./Form/Form";

const Home: NextPage = () => {
  return (
    <div className="w-44 bg-slate-400 py-10 px-5">
      <Forms />
    </div>
  );
};

export default Home;
