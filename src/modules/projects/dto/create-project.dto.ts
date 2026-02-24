export class CreateProjectDto {
  title: string;
  domain: string; // add this
  description: string;
  techStack: string;
  githubLink?: string;
  liveLink?: string;
  imageUrl?: string;
}