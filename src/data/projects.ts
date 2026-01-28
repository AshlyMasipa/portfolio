export interface Project {
  slug: string;
  title: string;
  description: string;
  previewUrl?: string; // live demo
  repoUrl: string;
  image: string;
  techStack: string[];
  details?: string; // long-form case study
}

export const projects: Project[] = [
  // Example project
  {
    slug: "portfolio-site",
    title: "Personal Portfolio",
    description: "Case-study style React portfolio",
    previewUrl: "https://yourportfolio.azurewebsites.net",
    repoUrl: "https://github.com/you/my-portfolio",
    image: "/images/projects/ubertest.jfif",
    techStack: ["React", "TypeScript", "Azure"],
    details: "Long-form explanation of design and implementation..."
  }
];
  // Add more projects as needed