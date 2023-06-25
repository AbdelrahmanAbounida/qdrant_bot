import Link from "next/link";
import {SiGoogleearth} from 'react-icons/si'
export default function Header() {

  return (
    <header className="flex flex-row xs:flex-row justify-between items-center w-full mt-3 border-b pb-2 sm:px-4 px-2 border-gray-500 gap-2">
      <Link href="/" className="flex space-x-2">
        <SiGoogleearth className="sm:w-9 sm:h-9 w-7 h-7 text-indigo-600 "/>
        <h1 className="sm:text-3xl text-xl font-bold ml-2 tracking-tight">
          CHAT <span className="text-indigo-600">WITH</span>DOC
        </h1>
      </Link>
      
    </header>
  );
}
