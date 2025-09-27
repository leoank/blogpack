import Image from "next/image";

export function Navbar() {
  return (
    <nav className="relative flex items-end h-32 select-none">
      <div className="flex gap-3 items-center">
        <Image
          className="size-8 mt-1"
          height={64}
          width={64}
          src="/assets/logo.svg"
          alt="A"
        />
        <div>
          <h1 className="font-light text-3xl">Ankur Kumar</h1>
        </div>
      </div>
    </nav>
  );
}
