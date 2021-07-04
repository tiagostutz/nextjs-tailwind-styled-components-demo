import Image from "next/image";
export default function Footer() {
  return (
    <footer className="mt-8 mb-4 pt-4 flex flex-row justify-center items-center border-t">
      Brought to you by
      <div className="ml-2">
        <img src="/favicon-32x32.png" alt="company logo" width="16" />
      </div>
    </footer>
  );
}
