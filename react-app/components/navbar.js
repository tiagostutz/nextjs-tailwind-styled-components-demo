import Image from "next/image";
export default function Navbar() {
  return (
    <div className="w-full p-3 border-b">
      <Image
        src="/favicon-32x32.png"
        alt="company logo"
        height={32}
        width={32}
      />
    </div>
  );
}
