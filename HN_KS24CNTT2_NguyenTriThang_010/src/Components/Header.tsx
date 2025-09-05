import { Contact } from "lucide-react";


export default function Header() {
  return (
    <>
      <header className="bg-green-700 rounded-t-lg py-4 px-6 flex items-center justify-center">
        <Contact className="text-white"/> &nbsp;
        <h1 className="text-white font-bold text-lg md:text-xl">
          Quản Lý Liên Hệ
        </h1>
      </header>
    </>
  );
}
