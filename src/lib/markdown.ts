import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const contentDirectory = path.join(process.cwd(), 'src/content/profile');

export function getBioData(lang: string) {
  // Look for bio-en.md or bio-fr.md
  const filePath = path.join(contentDirectory, `bio-${lang}.md`);
  
  // Fallback to English if the French file is missing
  const safePath = fs.existsSync(filePath) ? filePath : path.join(contentDirectory, `bio-en.md`);
  
  const fileContents = fs.readFileSync(safePath, 'utf8');
  const { data, content } = matter(fileContents);

  return {
    metadata: data,
    content: content,
  };
}

export function getProjectsData(lang: string) {
  const projectsDir = path.join(process.cwd(), 'src/content/projects');
  
  // If the folder doesn't exist yet, return empty
  if (!fs.existsSync(projectsDir)) return [];

  const files = fs.readdirSync(projectsDir);
  
  // Only grab the files for the current language (e.g., ends with -en.md)
  const langFiles = files.filter(file => file.endsWith(`-${lang}.md`));

  return langFiles.map(filename => {
    const filePath = path.join(projectsDir, filename);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContents);
    
    return {
      slug: filename.replace(`-${lang}.md`, ''),
      metadata: data,
      content: content,
    };
  });
}