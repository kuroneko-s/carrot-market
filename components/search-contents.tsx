interface SearchContentsProps {
  children?: any;
  title: "인기 중고" | "동네 정보";
}

export default function SearchContents({
  children,
  title,
}: SearchContentsProps) {
  return (
    <div className="bg-white w-[920px] border border-gray-200 rounded-lg inset-x-0 mx-auto my-8">
      <div className="py-5 px-8">
        <p className="text-lg font-semibold">{title}</p>
        {children}
      </div>
      <div className="w-full border-t text-center py-3 text-gray-500 cursor-pointer">
        더보기 (얘가 눌리면 api 동작시켜서 검색값 더 늘려서 data 값 더 넣어주고
        더 보이도록)
      </div>
    </div>
  );
}
