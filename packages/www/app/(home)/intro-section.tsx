import { Anchor } from "@/components/anchor";
import { introSectionData } from "@/data/intro-section";

export function IntroSection() {
  return (
    <section className="relative pt-16">
      <h1 className="font-light text-4xl mb-4 md:text-7xl">
        {introSectionData.name}
      </h1>
      <div className="mb-4">
        <p>{introSectionData.position}</p>
        <ul>
          {introSectionData.contact.map((contact) => (
            <li key={contact.link}>
              <Anchor href={contact.link} target="_blank">
                {contact.text}
              </Anchor>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex justify-end">
        <div
          className="flex-1 space-y-5"
          dangerouslySetInnerHTML={{ __html: introSectionData.aboutMe }}
        />
      </div>
    </section>
  );
}
