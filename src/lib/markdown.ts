import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const contentDirectory = path.join(process.cwd(), 'src/content/profile');

export function getBioData() {
  const filePath = path.join(contentDirectory, 'bio.md');
  const fileContents = fs.readFileSync(filePath, 'utf8');

  // Use gray-matter to parse the metadata section
  const { data, content } = matter(fileContents);

  return {
    metadata: data,
    content: content,
  };
}