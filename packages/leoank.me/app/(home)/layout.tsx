import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { PropsWithChildren } from "react";

export default function HomeLayout(props: PropsWithChildren) {
  const { children } = props;

  return (
    <>
      <main className="flex-1 flex flex-col">{children}</main>
      <Navbar className="mt-auto" />
      <Footer />
    </>
  );
}
