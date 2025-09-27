import Image from "next/image";

export function Navbar() {
  return (
    <nav className="relative flex items-end h-32">
      <div>
        <Image
          className="h-16 w-16"
          height={64}
          width={64}
          src="/assets/logo.svg"
          alt="A"
        />
      </div>
    </nav>
  );
}
