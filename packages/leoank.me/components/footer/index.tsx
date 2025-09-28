import { ContainerWithWrapper } from "../containers/with-wrapper";
import { socialLinks } from "./data";

export function Footer() {
  return (
    <footer className="mt-auto pt-16 pb-4 relative">
      <div
        style={{ background: "url('/assets/footer-bg.png')" }}
        className="inset-0 absolute opacity-35"
      />
      <ContainerWithWrapper
        wrapperProps={{
          className: "px-3 flex items-center justify-between z-10",
        }}
      >
        <div className="flex items-center gap-2">
          {socialLinks.map((item) => (
            <a
              target="_blank"
              className="inline-flex items-center rounded-sm border border-gray-600 p-2 transition-all hover:bg-gray-900 hover:[&>svg]:fill-gray-400"
              href={item.href}
              key={item.id}
            >
              {<item.icon className="size-6 fill-gray-600 transition" />}
            </a>
          ))}
        </div>
        <div className="text-xs mt-auto text-gray-500">
          Copyright 2025, Ankur Kumar
        </div>
      </ContainerWithWrapper>
    </footer>
  );
}
