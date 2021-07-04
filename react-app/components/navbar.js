import Image from "next/image";
export default function Navbar() {
  return (
    <div className="p-3 border-b flex flex-row items-center justify-start">
      <img src="/favicon-32x32.png" alt="company logo" width="16" />
      <div className="ml-2">Company</div>
    </div>
  );
}
