import SearchItem from "@components/search-item";
import SearchContents from "@components/search-contents";
import SearchDongne from "@components/search-dongne";
import type { NextPage } from "next";
import type { SearchItemProps } from "@components/search-item";
import type { SearchDongnePorps } from "@components/search-dongne";
import randomStrCreator from "./../../lib/randomStr";
import { useEffect, useState } from "react";

const dummyCreator = (): SearchItemProps[] => {
  return [...Array(18)].map((v, n) => ({
    imageSrc: "",
    imageAlt: `Test Image Al2q3wejpqowjepowqjpeowqjpoewqt ${n}`,
    title: `Test Title Al2q3wejpqowjepowqjpeowqjpoewqt ${n}`,
    price: n * 10000 + "",
    location: `Test Location ${n}`,
    like: n,
  }));
};

const dummyDongneCreator = (): SearchDongnePorps[] => {
  return [...Array(18)].map((v, n) => ({
    context: randomStrCreator(Math.floor(Math.random() * 250)),
    location: randomStrCreator(Math.floor(Math.random() * 30)),
    chat: n + "",
    id: n + "",
  }));
};

const Search: NextPage = () => {
  const [itmesData, setItmesData] = useState<SearchItemProps[]>();
  const [dongneData, setDongneData] = useState<SearchDongnePorps[]>();

  useEffect(() => {
    setItmesData(dummyCreator());
    setDongneData(dummyDongneCreator());
  }, []);

  return (
    <div className="pt-[66px] min-h-screen flex flex-col items-center bg-slate-50">
      <SearchContents title="인기 중고">
        <div className="grid grid-cols-3 gap-3 mt-5">
          {itmesData?.map((data, i) => (
            <SearchItem key={i} {...data} />
          ))}
        </div>
      </SearchContents>

      <SearchContents title="동네 정보">
        <div className="divide-y space-y-5">
          {dongneData?.map((data, i) => (
            <SearchDongne key={i} {...data} />
          ))}
        </div>
      </SearchContents>
    </div>
  );
};

export default Search;
