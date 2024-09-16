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
            <li
              key={publication.id}
              className="py-4 border-b border-b-gray-300 space-y-2"
            >
              <div className="font-bold">{publication.title}</div>
              <div>
                {publication.authors.map((author, idx) => (
                  <>
                    {author.link ? (
                      <a
                        className="underline"
                        href={author.link}
                        key={author.link}
                      >
                        {author.text}
                      </a>
                    ) : (
                      <span>{author.text}</span>
                    )}
                    {publication.authors.length !== idx + 1 && (
                      <span>,&nbsp;</span>
                    )}
                  </>
                ))}
              </div>
              <p className="text-[#555]">{publication.description}</p>
              {publication.link && (
                <a
                  target="_blank"
                  className="text-blue-700 underline mt-2"
                  href={publication.link}
                >
                  {publication.link}
                </a>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
