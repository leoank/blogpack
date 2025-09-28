import { ContainerWithWrapper } from "@/components/containers/with-wrapper";
import { IntroSection } from "./intro-section";
import { Header } from "./header";

export default function Home() {
  return (
    <ContainerWithWrapper
      className="flex-1"
      wrapperProps={{ className: "px-3 flex flex-col" }}
    >
      <Header />
      <IntroSection />
    </ContainerWithWrapper>
  );
}
