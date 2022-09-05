import Link from "next/link";

export default function Footer() {
  return (
    <div className="w-screen left-0 right-0 mx-auto border-t py-16">
      <div className="flex flex-col justify-center items-center left-0 right-0 mx-auto w-[1280px]">
        <div className="flex flex-row w-3/5 justify-center space-x-12 border-b pb-12">
          <div className="w-1/2 grid grid-rows-3 grid-cols-3 gap-12 text-xs">
            <div className="hover:cursor-pointer hover:underline">중고거래</div>
            <div className="hover:cursor-pointer hover:underline">
              당근비즈니스
            </div>
            <div className="hover:cursor-pointer hover:underline">
              자주 묻는 질문
            </div>
            <div className="hover:cursor-pointer hover:underline">동네가게</div>
            <div className="hover:cursor-pointer hover:underline">채팅하기</div>
            <div className="hover:cursor-pointer hover:underline">
              회사 소개
            </div>
            <div className="hover:cursor-pointer hover:underline">당근알바</div>
            <div></div>
            <div className="hover:cursor-pointer hover:underline">
              인재 채용
            </div>
          </div>
          <div className="w-1/2">
            <p className="pb-3 font-semibold text-sm">당근마켓 앱 다운로드</p>
            <Link href="/">
              <a className="inline-block shadow-sm mr-3">
                <div className="flex flex-row space-x-1.5 cursor-pointer px-7 py-2 text-md font-semibold rounded-md bg-slate-100 hover:bg-slate-200 hover:text-gray-500 hover:fill-current">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 384 512"
                    className="w-4"
                  >
                    <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
                  </svg>
                  <span>App Store</span>
                </div>
              </a>
            </Link>
            <Link href="/">
              <a className="inline-block shadow-sm">
                <div className="flex flex-row space-x-1.5 cursor-pointer px-5 py-2 text-md font-semibold rounded-md bg-slate-100 hover:bg-slate-200 hover:text-gray-500 hover:fill-current">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    className="w-4"
                  >
                    <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z" />
                  </svg>
                  <span>Google Play</span>
                </div>
              </a>
            </Link>
          </div>
        </div>
        <div className="flex flex-row w-3/5 pt-4 pb-12 text-gray-500">
          <div className="w-3/5">
            <p className="text-xs font-semibold">
              대표{" "}
              <span className="text-xs font-normal">김재현, 김용현 | </span>
              사업자번호{" "}
              <span className="text-xs font-normal">375-87-00088</span>
            </p>
            <p className="text-xs font-semibold">
              직업정보제공사업 신고번호{" "}
              <span className="text-xs font-normal">2016-서울서초-0051</span>
            </p>
            <p className="text-xs font-semibold">
              주소{" "}
              <span className="text-xs font-normal">
                서울특별시 구로구 디지털로 30길 28, 609호 (당근서비스)
              </span>
            </p>
            <p className="text-xs font-semibold">
              전화 <span className="text-xs font-normal">1544-9796 |</span>{" "}
              고객문의{" "}
              <span className="text-xs font-normal">cs@daangnservice.com</span>
            </p>
            <div className="my-5 text-xs font-semibold space-x-6">
              <span className="hover:cursor-pointer hover:underline">
                제휴 문의
              </span>
              <span className="hover:cursor-pointer hover:underline">
                광고 문의
              </span>
              <span className="hover:cursor-pointer hover:underline">
                PR 문의
              </span>
              <span className="hover:cursor-pointer hover:underline">
                IR 문의
              </span>
            </div>
            <div className="text-xs font-semibold space-x-4">
              <span className="hover:cursor-pointer hover:underline">
                이용약관
              </span>
              <span className="text-gray-600 hover:cursor-pointer hover:underline">
                개인정보처리방침
              </span>
              <span className="hover:cursor-pointer hover:underline">
                위치기반서비스 이용약관
              </span>
              <span className="hover:cursor-pointer hover:underline">
                이용자보호 비전과 계획
              </span>
            </div>
          </div>
          <div className="w-2/5">
            <div className="flex flex-row items-start w-full space-x-3">
              <Link href={"https://www.facebook.com/"}>
                <a target={"_blank"}>
                  <svg
                    width={25}
                    height={24}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    className="w-6 cursor-pointer hover:fill-current hover:text-gray-400"
                  >
                    <path d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z" />
                  </svg>
                </a>
              </Link>

              <Link href={"https://www.instagram.com/lilpaaaaaa_/?hl=ko"}>
                <a target={"_blank"}>
                  <svg
                    width={25}
                    height={24}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    className="cursor-pointer hover:fill-current hover:text-gray-400"
                  >
                    <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                  </svg>
                </a>
              </Link>

              <Link
                href={
                  "https://www.youtube.com/channel/UCroM00J2ahCN6k-0-oAiDxg"
                }
              >
                <a target={"_blank"}>
                  <svg
                    width={25}
                    height={24}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512"
                    className="cursor-pointer hover:fill-current hover:text-gray-400"
                  >
                    <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z" />
                  </svg>
                </a>
              </Link>
              <Link href={"https://github.com/kuroneko-s/carrot-market"}>
                <a target={"_blank"}>
                  <svg
                    width={25}
                    height={24}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    className="cursor-pointer hover:fill-current hover:text-gray-400"
                  >
                    <path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM277.3 415.7c-8.4 1.5-11.5-3.7-11.5-8 0-5.4.2-33 .2-55.3 0-15.6-5.2-25.5-11.3-30.7 37-4.1 76-9.2 76-73.1 0-18.2-6.5-27.3-17.1-39 1.7-4.3 7.4-22-1.7-45-13.9-4.3-45.7 17.9-45.7 17.9-13.2-3.7-27.5-5.6-41.6-5.6-14.1 0-28.4 1.9-41.6 5.6 0 0-31.8-22.2-45.7-17.9-9.1 22.9-3.5 40.6-1.7 45-10.6 11.7-15.6 20.8-15.6 39 0 63.6 37.3 69 74.3 73.1-4.8 4.3-9.1 11.7-10.6 22.3-9.5 4.3-33.8 11.7-48.3-13.9-9.1-15.8-25.5-17.1-25.5-17.1-16.2-.2-1.1 10.2-1.1 10.2 10.8 5 18.4 24.2 18.4 24.2 9.7 29.7 56.1 19.7 56.1 19.7 0 13.9.2 36.5.2 40.6 0 4.3-3 9.5-11.5 8-66-22.1-112.2-84.9-112.2-158.3 0-91.8 70.2-161.5 162-161.5S388 165.6 388 257.4c.1 73.4-44.7 136.3-110.7 158.3zm-98.1-61.1c-1.9.4-3.7-.4-3.9-1.7-.2-1.5 1.1-2.8 3-3.2 1.9-.2 3.7.6 3.9 1.9.3 1.3-1 2.6-3 3zm-9.5-.9c0 1.3-1.5 2.4-3.5 2.4-2.2.2-3.7-.9-3.7-2.4 0-1.3 1.5-2.4 3.5-2.4 1.9-.2 3.7.9 3.7 2.4zm-13.7-1.1c-.4 1.3-2.4 1.9-4.1 1.3-1.9-.4-3.2-1.9-2.8-3.2.4-1.3 2.4-1.9 4.1-1.5 2 .6 3.3 2.1 2.8 3.4zm-12.3-5.4c-.9 1.1-2.8.9-4.3-.6-1.5-1.3-1.9-3.2-.9-4.1.9-1.1 2.8-.9 4.3.6 1.3 1.3 1.8 3.3.9 4.1zm-9.1-9.1c-.9.6-2.6 0-3.7-1.5s-1.1-3.2 0-3.9c1.1-.9 2.8-.2 3.7 1.3 1.1 1.5 1.1 3.3 0 4.1zm-6.5-9.7c-.9.9-2.4.4-3.5-.6-1.1-1.3-1.3-2.8-.4-3.5.9-.9 2.4-.4 3.5.6 1.1 1.3 1.3 2.8.4 3.5zm-6.7-7.4c-.4.9-1.7 1.1-2.8.4-1.3-.6-1.9-1.7-1.5-2.6.4-.6 1.5-.9 2.8-.4 1.3.7 1.9 1.8 1.5 2.6z" />
                  </svg>
                </a>
              </Link>
              <span className="flex flex-row relative group">
                <svg
                  width={22}
                  height={22}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className="left-1 absolute pt-1 cursor-pointer group-hover:bg-gray-100"
                >
                  <path d="M57.7 193l9.4 16.4c8.3 14.5 21.9 25.2 38 29.8L163 255.7c17.2 4.9 29 20.6 29 38.5v39.9c0 11 6.2 21 16 25.9s16 14.9 16 25.9v39c0 15.6 14.9 26.9 29.9 22.6c16.1-4.6 28.6-17.5 32.7-33.8l2.8-11.2c4.2-16.9 15.2-31.4 30.3-40l8.1-4.6c15-8.5 24.2-24.5 24.2-41.7v-8.3c0-12.7-5.1-24.9-14.1-33.9l-3.9-3.9c-9-9-21.2-14.1-33.9-14.1H257c-11.1 0-22.1-2.9-31.8-8.4l-34.5-19.7c-4.3-2.5-7.6-6.5-9.2-11.2c-3.2-9.6 1.1-20 10.2-24.5l5.9-3c6.6-3.3 14.3-3.9 21.3-1.5l23.2 7.7c8.2 2.7 17.2-.4 21.9-7.5c4.7-7 4.2-16.3-1.2-22.8l-13.6-16.3c-10-12-9.9-29.5 .3-41.3l15.7-18.3c8.8-10.3 10.2-25 3.5-36.7l-2.4-4.2c-3.5-.2-6.9-.3-10.4-.3C163.1 48 84.4 108.9 57.7 193zM464 256c0-36.8-9.6-71.4-26.4-101.5L412 164.8c-15.7 6.3-23.8 23.8-18.5 39.8l16.9 50.7c3.5 10.4 12 18.3 22.6 20.9l29.1 7.3c1.2-9 1.8-18.2 1.8-27.5zm48 0c0 141.4-114.6 256-256 256S0 397.4 0 256S114.6 0 256 0S512 114.6 512 256z" />
                </svg>
                <select
                  name="order"
                  form="myForm"
                  className="w-24 pl-6 py-0.5 text-sm rounded-md cursor-pointer group-hover:bg-gray-100"
                >
                  <option value="americano" selected>
                    한국
                  </option>
                  <option value="caffe latte">카페라테</option>
                  <option value="cafe au lait">카페오레</option>
                  <option value="espresso">에스프레소</option>
                </select>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
