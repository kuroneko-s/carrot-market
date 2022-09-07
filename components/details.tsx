import type { ItemProps } from "@components/main-item";
import Item from "@components/main-item";
import { dummyItemPropsCreator } from "lib/dummyDataCreator";
import { useEffect, useState } from "react";
import Comment from "@components/comment";

interface DetailsProps {
  children?: any;
  type: "Articles" | "Dongne";
}

export default function Details({ children, type }: DetailsProps) {
  const [itmesData, setItmesData] = useState<ItemProps[]>();

  useEffect(() => {
    setItmesData(dummyItemPropsCreator());
  }, []);

  return (
    <div className="pt-[66px]">
      <div className="w-[720px] inset-x-0 mx-auto pt-5">
        {type === "Articles" ? (
          <div className="w-full flex flex-row justify-center items-center cursor-pointer">
            <div className="w-[4%] flex justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
                className="w-5"
              >
                <path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
              </svg>
            </div>
            <div className="w-[92%] h-[560px] bg-slate-400 rounded-xl"></div>
            <div className="w-[4%] flex justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
                className="w-5"
              >
                <path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" />
              </svg>
            </div>
          </div>
        ) : null}

        <div className="flex flex-row items-center justify-between details">
          <div className="flex flex-row items-center space-x-2">
            <div className="rounded-full bg-slate-500 w-10 h-10" />
            <div className="flex flex-col justify-center">
              <p className="font-bold">User Name</p>
              <p className="text-sm text-gray-700">User Location</p>
            </div>
          </div>
          <div className="flex flex-row my-5">
            <div className="flex flex-col items-end">
              <p>53.8도</p>
              <div className="relative w-20 h-1">
                <div className="absolute border-b-4 w-full" />
                <div className="absolute border-b-4 border-b-green-400 w-8/12" />
              </div>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="w-6"
              >
                <path d="M130.7 313.9C126.5 300.4 137.8 288 151.1 288H364.5C378.7 288 389.9 300.4 385.8 313.9C368.1 368.4 318.2 408 258.2 408C198.2 408 147.5 368.4 130.7 313.9V313.9zM208.4 192C208.4 209.7 194 224 176.4 224C158.7 224 144.4 209.7 144.4 192C144.4 174.3 158.7 160 176.4 160C194 160 208.4 174.3 208.4 192zM304.4 192C304.4 174.3 318.7 160 336.4 160C354 160 368.4 174.3 368.4 192C368.4 209.7 354 224 336.4 224C318.7 224 304.4 209.7 304.4 192zM512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 48C141.1 48 48 141.1 48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48z" />
              </svg>
              <p className="text-xs text-gray-500">매너온도</p>
            </div>
          </div>
        </div>

        <div className="py-6 details border-y">
          {type === "Articles" ? (
            <div className="my-3 space-y-1">
              <p className="text-2xl font-extrabold">title</p>
              <p className="text-xs text-gray-500">유아동 ∙ 끌올 2시간 전</p>
              <p className="text-base font-extrabold">12000원</p>
            </div>
          ) : null}

          <p>
            상태는괜찮습니다 개당가격. 안쪽에기모안감이예요 <br />{" "}
            신으면너무귀여워욥
          </p>

          {type === "Articles" ? (
            <div className="flex flex-row text-xs my-5 text-gray-500 space-x-1">
              <span>관심 1</span>
              <span>·</span>
              <span>채팅 1</span>
              <span>·</span>
              <span>조회 1</span>
            </div>
          ) : (
            <div className="flex flex-row text-xs my-5 text-gray-500 space-x-1">
              <span>몇분전</span>
              <span>·</span>
              <span>조회 1</span>
            </div>
          )}
        </div>

        <div className="py-6 details border-b">
          <p>댓글 n</p>
          <div>
            <Comment />
          </div>
        </div>

        <div className="details py-8">
          <div className="flex flex-row justify-between items-center">
            <p className="font-bold text-lg">당근마켓 인기중고</p>
            <p className="cursor-pointer text-red-400">더 구경하기</p>
          </div>
          <div className="grid grid-cols-3 pt-6 gap-4">
            {itmesData?.map((item, i) => (
              <Item key={i} {...item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
