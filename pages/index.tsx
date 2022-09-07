import type { NextPage } from "next";
import Image from "next/image";
import MainSection from "@components/main-section";
import bgImage from "@images/bg-image.webp";
import bgImage2 from "@images/bg-image2.webp";
import bgImage3 from "@images/bg-image3.webp";
import bgImage4 from "@images/bg-image4.webp";
import Item from "@components/main-item";
import MainButton from "@components/main-button";
import { dummyItemPropsCreator } from "lib/dummyDataCreator";

const Home: NextPage = () => {
  const dummyData = dummyItemPropsCreator();
  return (
    <section className="w-screen flex flex-col items-center space-y-16 pt-[66px]">
      <MainSection bgColor={"bg-orange-50"}>
        <div className="w-1/3 pl-20">
          <div className="text-4xl font-bold leading-[3rem] mb-12">
            <p>당신 근처의</p>
            <p>당근마켓</p>
          </div>
          <p className="">
            중고 거래부터 동네 정보까지, 이웃과 함께해요. 가깝고 따뜻한 당신의
            근처를 만들어요.
          </p>
        </div>
        <div className="w-2/3 h-[600px] relative top-[-30px] left-12">
          <Image
            src={bgImage}
            layout="fill"
            alt="main-bg-image"
            placeholder="blur"
          />
        </div>
      </MainSection>

      <MainSection>
        <div className="w-[500px] h-[600px] relative mr-32">
          <Image
            src={bgImage2}
            layout="fill"
            alt="main-bg-image"
            placeholder="blur"
          />
        </div>
        <div className="w-1/3 space-y-8">
          <div className="text-4xl font-bold leading-[3rem]">
            <p>우리 동네</p>
            <p>중고 직거래 마켓</p>
          </div>
          <p className="">
            동네 주민들과 가깝고 따뜻한 거래를 지금 경험해보세요.
          </p>
          <MainButton context="인기매물 보기" href="/" style="mr-4" />
          <MainButton context="믿을 수 있는 중고거래" href="/" />
        </div>
      </MainSection>

      <MainSection bgColor={"bg-green-50"}>
        <div className="w-1/3 mr-32">
          <div className="text-4xl font-bold leading-[3rem] mb-10">
            <p>이웃과 함께 하는</p>
            <p>동네생활</p>
          </div>
          <p className="mb-14">
            우리 동네의 다양한 이야기를 이웃과 함께 나누어요.
          </p>
          <ul className="flex flex-row justify-between space-x-4">
            <li className="space-y-2">
              <p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="56"
                  height="56"
                  viewBox="0 0 56 56"
                  fill="none"
                >
                  <circle cx="28" cy="28" r="28" fill="#C2E8C2" />
                  <path d="M34 41V26.5L23 17.5L12 26.5V41H34Z" fill="white" />
                  <path
                    d="M12 26.5V41H34V26.5"
                    stroke="#489F48"
                    strokeWidth="2"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M19 31C19 30.4477 19.4477 30 20 30H26C26.5523 30 27 30.4477 27 31V40H19V31Z"
                    fill="#95D295"
                  />
                  <path
                    d="M9 29L23 17L37 29"
                    stroke="#489F48"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M48 23C48 28.5228 43.5228 33 38 33C35.9024 33 33.9557 32.3542 32.3478 31.2506C30.6087 31.6957 28.8696 32.1304 28.8696 32.1304C28.8696 32.1304 29.3043 30.3913 29.7391 28.6371C28.6418 27.0321 28 25.091 28 23C28 17.4772 32.4772 13 38 13C43.5228 13 48 17.4772 48 23Z"
                    fill="white"
                    stroke="#489F48"
                    strokeWidth="2"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M37.9875 25.2C37.9875 22.9544 40.726 23.0696 40.975 21.0928C41.2239 19.1159 39.5709 17.9355 37.9875 18.0027C36.4041 18.0699 35 19.2886 35 20.8816"
                    stroke="#489F48"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <circle cx="38.0003" cy="28.0801" r="0.96" fill="#489F48" />
                </svg>
              </p>
              <p className="text-xs font-extrabold">우리동네질문</p>
              <p className="text-xs">궁금한 게 있을 땐 이웃에게 물어보세요.</p>
            </li>
            <li className="space-y-2">
              <p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="56"
                  height="56"
                  viewBox="0 0 56 56"
                  fill="none"
                >
                  <circle cx="28" cy="28" r="28" fill="#C2E8C2" />
                  <path
                    d="M19.902 14H38C39.1046 14 40 14.8954 40 16V42H19C17.8954 42 17 41.1046 17 40V14H15.5234H19.902Z"
                    fill="white"
                    stroke="#489F48"
                    strokeWidth="2"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M21 40C21 41.5 20 42 19 42H40C41 42 42 41.5 42 40.5V39H21V40Z"
                    fill="white"
                    stroke="#489F48"
                    strokeWidth="2"
                    strokeLinejoin="round"
                  />
                  <rect
                    x="22"
                    y="19"
                    width="14"
                    height="7"
                    rx="1"
                    fill="#95D295"
                  />
                  <path
                    d="M23 30L35 30"
                    stroke="#95D295"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M23 34H32"
                    stroke="#95D295"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M14 16C14 15 14.375 14 15.5 14C16.625 14 17 15 17 16V18H14V16Z"
                    fill="white"
                    stroke="#489F48"
                    strokeWidth="2"
                    strokeLinejoin="round"
                  />
                </svg>
              </p>
              <p className="text-xs font-bold">우리동네질문</p>
              <p className="text-xs">궁금한 게 있을 땐 이웃에게 물어보세요.</p>
            </li>
            <li className="space-y-2">
              <p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="56"
                  height="56"
                  viewBox="0 0 56 56"
                  fill="none"
                >
                  <circle cx="28" cy="28" r="28" fill="#C2E8C2" />
                  <path
                    d="M19 29.5C19 36.4036 24.5964 42 31.5 42C34.1219 42 36.5553 41.1927 38.5652 39.8132C40.7391 40.3696 42.913 40.913 42.913 40.913C42.913 40.913 42.3696 38.7391 41.8261 36.5464C43.1978 34.5402 44 32.1138 44 29.5C44 22.5964 38.4036 17 31.5 17C24.5964 17 19 22.5964 19 29.5Z"
                    fill="white"
                    stroke="#489F48"
                    strokeWidth="2"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M37 26.5C37 33.4036 31.4036 39 24.5 39C21.8781 39 19.4447 38.1927 17.4348 36.8132C15.2609 37.3696 13.087 37.913 13.087 37.913C13.087 37.913 13.6304 35.7391 14.1739 33.5464C12.8022 31.5402 12 29.1138 12 26.5C12 19.5964 17.5964 14 24.5 14C31.4036 14 37 19.5964 37 26.5Z"
                    fill="white"
                    stroke="#489F48"
                    strokeWidth="2"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M19 24L30 24"
                    stroke="#95D295"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M19 29L26 29"
                    stroke="#95D295"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </p>
              <p className="text-xs font-bold">우리동네질문</p>
              <p className="text-xs">궁금한 게 있을 땐 이웃에게 물어보세요.</p>
            </li>
          </ul>
        </div>
        <div className="w-[500px] h-[600px] relative">
          <Image src={bgImage3} layout="fill" alt="main-bg-image" />
        </div>
      </MainSection>

      <MainSection>
        <div className="w-[500px] h-[600px] relative mr-32">
          <Image src={bgImage4} layout="fill" alt="main-bg-image" />
        </div>
        <div className="w-1/3 space-y-8">
          <div className="text-4xl font-bold leading-[3rem] mb-12">
            <p>내 근처에서 찾는</p>
            <p>동네가게</p>
          </div>
          <p className="">
            우리 동네 가게를 찾고 있나요?
            <br />
            동네 주민이 남긴 진짜 후기를 함께 확인해보세요!
          </p>
          <MainButton context="당근마켓 동네가게 찾기" href="/" />
        </div>
      </MainSection>

      <section className="w-screen shadow-sm bg-slate-50 py-36">
        <div className="flex flex-col justify-center items-center overflow-hidden max-w-[1280px] left-0 right-0 mx-auto space-y-16">
          <div className="w-full flex flex-col items-center">
            <p className="text-4xl font-extrabold">중고거래 인기매물</p>
          </div>
          <div className="grid grid-cols-4 grid-rows-2 gap-[48px]">
            {dummyData.map((data, n) => (
              <Item key={n} {...data} />
            ))}
          </div>
          <p className="underline font-semibold text-sm">인기매물 더 보기</p>
        </div>
      </section>

      <section className="flex flex-col justify-center items-center pb-16">
        <p className="underline font-semibold text-sm mb-4 cursor-pointer">
          중고거래 인기검색어
        </p>
        <div className="space-x-10">
          <span className="cursor-pointer text-sm hover:underline">
            포켓몬빵
          </span>
          <span className="cursor-pointer text-sm hover:underline">자전거</span>
          <span className="cursor-pointer text-sm hover:underline">의자</span>
          <span className="cursor-pointer text-sm hover:underline">냉장고</span>
          <span className="cursor-pointer text-sm hover:underline">캠핑</span>
          <span className="cursor-pointer text-sm hover:underline">
            아이패드
          </span>
          <span className="cursor-pointer text-sm hover:underline">아이폰</span>
          <span className="cursor-pointer text-sm hover:underline">노트북</span>
          <span className="cursor-pointer text-sm hover:underline">알바</span>
          <span className="cursor-pointer text-sm hover:underline">
            오토바이
          </span>
        </div>
      </section>
    </section>
  );
};

export default Home;
