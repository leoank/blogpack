import { ContainerWithWrapper } from "@/components/containers/with-wrapper";
import { IntroSection } from "./intro-section";
import { ExperienceSection } from "./experience-section";
import { PublicationSection } from "./publication-section";

export default function Home() {
  return (
    <ContainerWithWrapper wrapperProps={{ className: "px-3" }}>
      <IntroSection />
      <ExperienceSection />
      <PublicationSection />
    </ContainerWithWrapper>
  );
}
