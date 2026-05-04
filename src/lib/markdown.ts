import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export interface ProjectMetadata {
  title: string;
  type: string;
  tech?: string;
  media?: string;
  logo?: string;
  github?: string;
  demo?: string;
  featured?: boolean; 
  shortDescription?: string;
}

export interface NavbarDict {
  home: string;
  about: string;
  education: string;
  projects: string;
  hobbies: string;
  contact: string;
}

export interface Project {
  slug: string;
  metadata: ProjectMetadata;
  content: string;
}

const contentDirectory = path.join(process.cwd(), 'src/content/profile');

export function getBioData(lang: string) {
  const filePath = path.join(contentDirectory, `bio-${lang}.md`);
  const safePath = fs.existsSync(filePath) ? filePath : path.join(contentDirectory, `bio-en.md`);
  
  const fileContents = fs.readFileSync(safePath, 'utf8');
  const { data, content } = matter(fileContents);

  return {
    metadata: data,
    content: content,
  };
}

export function getProjectsData(lang: string): Project[] {
  const projectsDir = path.join(process.cwd(), 'src/content/projects');
  
  if (!fs.existsSync(projectsDir)) return [];

  const files = fs.readdirSync(projectsDir);
  const langFiles = files.filter(file => file.endsWith(`-${lang}.md`));

  return langFiles.map(filename => {
    const filePath = path.join(projectsDir, filename);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    
    // 🚨 We cast 'data' as ProjectMetadata so TypeScript knows what fields are inside
    const { data, content } = matter(fileContents);
    
    return {
      slug: filename.replace(`-${lang}.md`, ''),
      metadata: data as ProjectMetadata,
      content: content,
    };
  });
}