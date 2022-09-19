import { NextPage } from "next";

const Header: NextPage = () => {
  return (
    <div className="text-center border-b border-slate-300 p-4 text-gray-500">
      <div className="text-2xl font-bold text-slate-800">Paicaloid</div>
      <div className="text-gray-500">Software Engineering</div>
      <div className="flex justify-center gap-2 text-sm">
        <div>M: 085-131-3345</div>
        <div>E: pai@gmail.com</div>
      </div>
    </div>
  );
}

export default Header