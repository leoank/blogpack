1. This directory contains all MDX files for blog posts.
2. After adding a new blog, make sure to update `all.ts`, otherwise, the post won’t be published.
3. Every MDX file must include frontmatter with the following fields:
   1. `title`: string
   2. `summary`: string
   3. `date`: valid date string, YYYY-MM-DD
   4. `thumbnailURL`: string (optional)

4. Do not include an `<h1>` at the start of the MDX file, the blog system automatically uses the title as the main heading.