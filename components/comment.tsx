interface CommentProps {
  answer?: boolean;
}

export default function Comment({ answer = false }: CommentProps) {
  return (
    <div className="flex flex-row pt-3">
      {answer ? <div className="border-l-2 border-b-2 w-4 h-4 mr-4" /> : null}

      <div className="space-y-2">
        <div className="flex flex-row justify-start items-center space-x-2">
          <div className="w-7 h-7 rounded-full bg-slate-400" />
          <span className="font-bold text-sm">아이디</span>
          <span className="text-xs text-gray-700">지역</span>
          <div className="px-1 py-0.5 text-xs text-gray-500 border border-gray-500 rounded-sm">
            작성자
          </div>
        </div>
        <div className="text-base">댓글 내용</div>
        <div className="text-xs text-gray-500">100시간 전</div>
      </div>
    </div>
  );
}
