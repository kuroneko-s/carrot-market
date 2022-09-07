export default function Comment() {
  return (
    <div>
      <div className="flex flex-row justify-start items-center">
        <div className="w-7 h-7 rounded-full bg-slate-400" />
        <span className="font-bold text-sm">아이디</span>
        <span className="text-xs">지역</span>
        <div className="mx-1 my-0.5">작성자</div>
      </div>
    </div>
  );
}
