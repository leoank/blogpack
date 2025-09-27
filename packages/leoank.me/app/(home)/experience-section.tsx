import { experienceSectionData } from "@/data/experience-section";

export function ExperienceSection() {
  return (
    <div className="my-8 py-8 ">
      <h2 className="font-light text-2xl mb-4 md:text-5xl">
        {experienceSectionData.title}
      </h2>
      <p className="">{experienceSectionData.description}</p>

      <div className="flex justify-end mt-8">
        <ul className="flex-1 space-y-3">
          {experienceSectionData.experiences.map((experience) => (
            <li key={experience.id} className="py-4 space-y-2 border-b">
              <div className="font-bold">{experience.company}</div>
              <p>
                {experience.position} - {experience.period}
              </p>
              <p className="text-secondary">{experience.about}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
