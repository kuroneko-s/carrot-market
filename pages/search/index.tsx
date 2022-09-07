import SearchItem from "@components/search-item";
import SearchContents from "@components/search-contents";
import SearchDongne from "@components/search-dongne";
import type { NextPage } from "next";
import type { SearchItemProps } from "@components/search-item";
import type { SearchDongnePorps } from "@components/search-dongne";
import { useEffect, useState } from "react";
import {
  dummyDongneCreator,
  dummySearchItemCreator,
} from "lib/dummyDataCreator";

const Search: NextPage = () => {
  const [itmesData, setItmesData] = useState<SearchItemProps[]>();
  const [dongneData, setDongneData] = useState<SearchDongnePorps[]>();

  useEffect(() => {
    setItmesData(dummySearchItemCreator());
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
