import Link from "next/link";

interface MainButtonProps {
  href: string;
  context: string;
  style?: string;
}

export default function MainButton({ href, context, style }: MainButtonProps) {
  return (
    <Link href={href}>
      <a className={`inline-block shadow-sm ${style}`}>
        <div className="inline-block cursor-pointer px-5 py-3 text-lg font-semibold rounded-md bg-slate-100 hover:bg-slate-200">
          {context}
        </div>
      </a>
    </Link>
  );
}
