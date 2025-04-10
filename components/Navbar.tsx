import Link from 'next/link';
import { ModeToggle } from './ui/mode-toggle';
import userData from '@constants/user';

const Navbar = () => {
  return (
    <nav className="p-4 border-solid border-b-2 border-muted ">
      <div className="container  mx-auto flex items-center justify-between ">
        <div className="w-1/4">
          <Link className="block text-left" href="/">
            <h1 className="text-xl font-bold">{userData.name}</h1>
            <p className="hidden md:visible text-sm text-gray-400">
              Developer & Photographer
            </p>
          </Link>
        </div>
        <div className="flex-grow text-center hidden md:block">
          <div className="inline-flex items-center space-x-6">
            <Link href="/real-estate" className="hover:text-gray-300">
              Real Estate
            </Link>
            <Link href="/wildlife" className="hover:text-gray-300">
              Wildlife
            </Link>
            <Link href="/experience" className="hover:text-gray-300">
              Experience
            </Link>
            <Link href="/projects" className="hover:text-gray-300">
              Projects
            </Link>
            <Link href="/about" className="hover:text-gray-300">
              About
            </Link>
          </div>
        </div>
        <div className="w-1/4 flex justify-end">
          <ModeToggle />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
