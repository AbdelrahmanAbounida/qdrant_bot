import Link from "next/link";
import {CgWebsite} from 'react-icons/cg'
import {AiOutlineGithub} from 'react-icons/ai'


export default function Footer() {
  return (
    <footer className="text-center h-16 sm:h-20 w-full sm:pt-2 pt-4 border-t mt-5 flex sm:flex-row flex-col justify-between items-center px-3 space-y-3 sm:mb-0 mb-3 border-gray-500">
      <div className="text-gray-500">
       @aboneda{" "}
        <a
          href="#"
          target="_blank"
          className="font-bold hover:underline transition hover:text-gray-300 underline-offset-2"
        >
          2023{" "}
        </a>
     
      </div>
      <div className="flex space-x-4 pb-4 sm:pb-0">
        <Link
          href="https://abdelrahmanabounida.github.io/webPortfolio/"
          className="group"
          aria-label="TaxPal on Twitter"
        >
          <CgWebsite className='h-6 w-6 fill-gray-500 group-hover:fill-gray-300' />
        </Link>
        <Link
          href="https://github.com/AbdelrahmanAbounida?tab=repositories"
          className="group"
          aria-label="TaxPal on GitHub"
        >
        <AiOutlineGithub className="h-6 w-6  group-hover:fill-gray-300" />
        </Link>
      </div>
    </footer>
  );
}
