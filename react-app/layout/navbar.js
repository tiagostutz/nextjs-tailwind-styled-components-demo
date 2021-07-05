import Link from "next/link";

export default function Navbar() {
  return (
    <div className="w-full p-3 border-b">
      <nav className="container max-w-screen-xl  mx-auto flex flex-row justify-between">
        <div className="flex flex-row justify-start items-center">
          <img src="/favicon-32x32.png" alt="company logo" width="16" />
          <div className="ml-2">Company Name</div>
        </div>
        <ul className="flex justify-end items-center w-4/6 text-gray-600">
          <li className="mr-4">
            <Link href="/"> Home</Link>
          </li>
          <li className="mr-4">
            <Link href="/ui-ux/compare/desktop"> Desktop UX/UI Spec </Link>
          </li>
          <li>
            <Link href="/ui-ux/compare/mobile"> Mobile UX/UI Spec </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
