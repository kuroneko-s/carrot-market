interface MainSectionProps {
  bgColor?: string;
  children: any;
}

export default function MainSection({ children, bgColor }: any) {
  return (
    <section className={`w-screen shadow-sm ${bgColor}`}>
      <div className="flex flex-row justify-center items-center overflow-hidden max-h-[540px] max-w-[1280px] inset-x-0 mx-auto">
        {children}
      </div>
    </section>
  );
}
