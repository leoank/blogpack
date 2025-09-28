import { ContainerWithWrapper } from "../containers/with-wrapper";
import { socialLinks } from "./data";

export function Footer() {
  return (
    <footer className="mt-16 pt-16 pb-4 relative">
      <div className="inset-0 absolute opacity-35 bg-[url('/assets/footer-bg.png')]" />
      <ContainerWithWrapper
        wrapperProps={{
          className:
            "px-3 flex items-start gap-2 z-10 flex-col md:flex-row md:items-center md:justify-between",
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
