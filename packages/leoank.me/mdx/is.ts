import { TFrontmatter } from "./types";

export function isValidFrontMatter(
  frontMatter: unknown
): frontMatter is TFrontmatter {
  if (typeof frontMatter !== "object" || !frontMatter) {
    throw new Error("Frontmatter is not a valid object.");
  }

  if (!("title" in frontMatter) || typeof frontMatter.title !== "string") {
    throw new Error(
      `Frontmatter should have title, but it is missing. Got: ${JSON.stringify(
        frontMatter,
        null,
        2
      )}`
    );
  }

  if (!("summary" in frontMatter) || typeof frontMatter.summary !== "string") {
    throw new Error(
      `Frontmatter should have summary, but it is missing. Got: ${JSON.stringify(
        frontMatter,
        null,
        2
      )}`
    );
  }
  if (
    !("date" in frontMatter) ||
    typeof frontMatter.date !== "string" ||
    isNaN(new Date(frontMatter.date).getTime())
  ) {
    throw new Error(
      `Frontmatter should have a valid date string, Got: ${JSON.stringify(
        frontMatter,
        null,
        2
      )}`
    );
  }

  if ("references" in frontMatter && !Array.isArray(frontMatter.references)) {
    throw new Error(
      `references should be a valid array, Got: ${JSON.stringify(
        frontMatter,
        null,
        2
      )}`
    );
  }

  if ("references" in frontMatter && Array.isArray(frontMatter.references)) {
    for (const ref of frontMatter.references) {
      if (
        typeof ref !== "object" ||
        !ref ||
        !("name" in ref) ||
        !("text" in ref)
      ) {
        throw new Error(
          `All the references should be an object with "name" and "text" fields as string. Ref with error: ${ref}`
        );
      }
    }

    const seen: Record<string, string> = {};
    for (const ref of frontMatter.references) {
      if (seen[ref.name]) {
        throw new Error(
          `Duplicate name found for ${ref.name}. All references should have unique name.`
        );
      }
      seen[ref.name] = ref.name;
    }
  }

  return true;
}
