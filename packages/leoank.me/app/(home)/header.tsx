import { Anchor } from "@/components/anchor";
import { Dots } from "@/components/dots";
import { LogoWithName } from "@/components/logo-with-name";

export function Header() {
  return (
    <header className="pt-8 pb-4 md:pt-16 lg:pt-24 xl:pt-32 relative">
      <LogoWithName />
      <div className="mt-2">
        <p>Research associate, Broad Institute of MIT and Harvard</p>
        <Anchor href="mailto:leoank98@gmail.com" target="_blank">
          leoank98@gmail.com
        </Anchor>
        <div className="absolute top-0 -left-10 -translate-x-full">
          <Dots columns={100} rows={30} />
        </div>
      </div>
    </header>
  );
}
