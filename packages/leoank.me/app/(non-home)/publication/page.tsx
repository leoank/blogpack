import { Anchor } from "@/components/anchor";
import { PageDescription, PageHeading } from "@/components/typography";

type TPublicationAuthor = {
  text: string;
  link?: string;
};

type TPublication = {
  id: string;
  title: string;
  authors: TPublicationAuthor[];
  description: string;
  link: string;
};

const publications: TPublication[] = [
  {
    id: "cell-painting",
    title: "Cell Painting Gallery: an open resource for image-based profiling",
    authors: [
      { text: "Erin Weisbart" },
      { link: "https://orcid.org/0000-0002-7686-7335", text: "Ankur Kumar" },
      { text: "John Arevalo" },
    ],
    description:
      "Image-based or morphological profiling is a rapidly expanding field wherein cells are ‘profiled’ by extracting hundreds to thousands of unbiased...",
    link: "https://www.nature.com/articles/s41592-024-02399-z",
  },
  {
    id: "automated-ml",
    title:
      "First fully-automated AI/ML virtual screening cascade implemented at a drug discovery centre in Africa",
    authors: [
      { text: "Gemma Turon" },
      { text: "Jason Hlozek" },
      { text: "John G. Woodland" },
      { link: "https://orcid.org/0000-0002-7686-7335", text: "Ankur Kumar" },
      { text: "Kelly Chibale" },
      { text: "Miquel Duran-Frigola" },
    ],
    description:
      "Streamlined data-driven drug discovery remains challenging, especially in resource-limited settings. We present ZairaChem, an artificial intelligence (AI)...",
    link: "https://www.nature.com/articles/s41467-023-41512-2",
  },
];

export default function Publication() {
  return (
    <div>
      <PageHeading>Publication</PageHeading>
      <PageDescription>My research papers.</PageDescription>

      <ul className="space-y-10 pt-10 pb-4">
        {publications.map((pub) => (
          <li key={pub.id} className="py-4 mb-8 border-b border-b-muted/20">
            {/* Title */}
            <Anchor
              href={pub.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl"
            >
              {pub.title}
            </Anchor>

            {/* Authors */}
            <p className="mt-2 text-sm text-neutral-700 dark:text-neutral-300">
              {pub.authors.map((author, i) => (
                <span key={i}>
                  {author.link ? (
                    <Anchor
                      href={author.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {author.text}
                    </Anchor>
                  ) : (
                    author.text
                  )}
                  {i < pub.authors.length - 1 && ", "}
                </span>
              ))}
            </p>

            {/* Description */}
            <p className="mt-3 text-neutral-600 dark:text-neutral-400">
              {pub.description}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
