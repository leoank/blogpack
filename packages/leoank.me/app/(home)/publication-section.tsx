import { Anchor } from "@/components/anchor";
import { publicationSectionData } from "@/data/publication-section";

export function PublicationSection() {
  return (
    <div className="my-8 py-8 ">
      <h2 className="font-light text-2xl mb-4 md:text-5xl">
        {publicationSectionData.title}
      </h2>

      <div className="flex justify-end mt-8">
        <ul className="flex-1 space-y-3">
          {publicationSectionData.publications.map((publication) => (
            <li key={publication.id} className="py-4 border-b  space-y-2">
              <div className="font-bold">{publication.title}</div>
              <div>
                {publication.authors.map((author, idx) => (
                  <>
                    {author.link ? (
                      <Anchor href={author.link} key={author.link}>
                        {author.text}
                      </Anchor>
                    ) : (
                      <span>{author.text}</span>
                    )}
                    {publication.authors.length !== idx + 1 && (
                      <span>,&nbsp;</span>
                    )}
                  </>
                ))}
              </div>
              <p className="text-secondary">{publication.description}</p>
              {publication.link && (
                <Anchor
                  target="_blank"
                  className="mt-2"
                  href={publication.link}
                >
                  {publication.link}
                </Anchor>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
