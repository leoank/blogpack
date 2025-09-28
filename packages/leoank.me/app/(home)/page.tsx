import { ContainerWithWrapper } from "@/components/containers/with-wrapper";
import { IntroSection } from "./intro-section";
import { Header } from "./header";

export default function Home() {
  return (
    <ContainerWithWrapper wrapperProps={{ className: "px-3" }}>
      <Header />
      <IntroSection />
    </ContainerWithWrapper>
  );
}
