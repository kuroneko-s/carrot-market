import type { ItemProps } from "@components/main-item";
import type { SearchItemProps } from "@components/search-item";
import type { SearchDongnePorps } from "@components/search-dongne";
import randomStrCreator from "./randomStr";

export const dummyItemPropsCreator = (): ItemProps[] => {
  return [...Array(6)].map((v, n) => ({
    imageSrc: "",
    imageAlt: `Test Image Alt ${n}`,
    title: `Test Title ${n}`,
    price: n * 10000 + "",
    location: `Test Location ${n}`,
    like: n,
    chat: n,
  }));
};

export const dummySearchItemCreator = (): SearchItemProps[] => {
  return [...Array(18)].map((v, n) => ({
    imageSrc: "",
    imageAlt: `Test Image Al2q3wejpqowjepowqjpeowqjpoewqt ${n}`,
    title: `Test Title Al2q3wejpqowjepowqjpeowqjpoewqt ${n}`,
    price: n * 10000 + "",
    location: `Test Location ${n}`,
    like: n,
  }));
};

export const dummyDongneCreator = (): SearchDongnePorps[] => {
  return [...Array(18)].map((v, n) => ({
    context: randomStrCreator(Math.floor(Math.random() * 250)),
    location: randomStrCreator(Math.floor(Math.random() * 30)),
    chat: n + "",
    id: n + "",
  }));
};
