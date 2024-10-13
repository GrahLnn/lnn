import cn from "classnames";
import Link from "next/link";

export default function Header() {
  const itmes = ["GrahLnn"];

  return (
    <nav className="w-screen flex justify-center items-center">
      <div className="z-10 w-full mx-24 justify-between font-mono text-sm lg:flex">
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:size-auto lg:bg-none flex gap-4">
          {itmes.map((item) => (
            <Link key={item} href={`/`} className="my-4">
              {item}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
