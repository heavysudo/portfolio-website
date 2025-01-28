import { Project } from '@/types/Project'

export function getProjects(): Project[] {
  return [
    {
      id: 'project1',
      title: 'Personal Portfolio',
      description:
        'A responsive portfolio website built with Next.js and Tailwind CSS.',
      technologies: ['Next.js', 'TypeScript', 'Tailwind CSS'],
      imageUrl: '/projects/portfolio.jpg',
      githubUrl: 'https://github.com/yourusername/portfolio',
      liveUrl: 'https://yourportfolio.com',
    },
    {
      id: 'project2',
      title: 'Task Manager App',
      description:
        'A full-stack task management application with user authentication.',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB'],
      imageUrl: '/projects/task-manager.jpg',
      githubUrl: 'https://github.com/yourusername/task-manager',
    },
    // Add more projects as needed
  ]
}
