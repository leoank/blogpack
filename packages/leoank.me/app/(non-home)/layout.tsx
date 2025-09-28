import { ContainerWithWrapper } from "@/components/containers/with-wrapper";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { PropsWithChildren } from "react";

export default function NonHomeLayout(props: PropsWithChildren) {
  const { children } = props;

  return (
    <>
      <ContainerWithWrapper
        className="flex-1 pt-8 relative"
        wrapperProps={{ className: "px-3 flex flex-col" }}
      >
        <Navbar className="mb-10" />
        <main className="flex-1 flex flex-col py-4">{children}</main>
      </ContainerWithWrapper>
      <Footer />
    </>
  );
}
