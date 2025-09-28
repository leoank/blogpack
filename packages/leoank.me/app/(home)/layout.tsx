import { ContainerWithWrapper } from "@/components/containers/with-wrapper";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { PropsWithChildren } from "react";

export default function HomeLayout(props: PropsWithChildren) {
  const { children } = props;

  return (
    <>
      <ContainerWithWrapper
        className="flex-1"
        wrapperProps={{ className: "px-3 flex flex-col" }}
      >
        <main className="flex-1 flex flex-col">{children}</main>
        <Navbar className="mt-auto" />
      </ContainerWithWrapper>
      <Footer />
    </>
  );
}
