import type { NextPage } from "next";
import type { SearchItemProps } from "@components/search-item";

const dummyCreator = (): SearchItemProps[] => {
  return [...Array(8)].map((v, n) => ({
    imageSrc: "",
    imageAlt: `Test Image Al2q3wejpqowjepowqjpeowqjpoewqt ${n}`,
    title: `Test Title ${n}`,
    price: n * 10000 + "",
    location: `Test Location ${n}`,
    like: n,
  }));
};

const Search: NextPage = () => {
  return (
    <div className="pt-[66px] min-h-screen flex flex-col items-center bg-slate-50">
      <div className="bg-white w-[920px] h-96 border border-gray-200 rounded-lg my-8 inset-x-0 mx-auto"></div>
    </div>
  );
};

export default Search;
