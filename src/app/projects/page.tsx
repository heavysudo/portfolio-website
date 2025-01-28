import Image from 'next/image'
import { getProjects } from '@/lib/projects'

export default function ProjectsPage() {
  const projects = getProjects()

  return (
    <div>
      <h1 className='text-3xl font-bold mb-8'>My Projects</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
        {projects.map((project) => (
          <div
            key={project.id}
            className='border rounded-lg overflow-hidden shadow-lg'
          >
            <Image
              src={project.imageUrl}
              alt={project.title}
              width={600}
              height={400}
              className='w-full h-48 object-cover'
            />
            <div className='p-6'>
              <h2 className='text-2xl font-bold mb-2'>{project.title}</h2>
              <p className='text-gray-700 mb-4'>{project.description}</p>
              <div className='mb-4'>
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className='flex space-x-4'>
                <a
                  href={project.githubUrl}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-blue-500 hover:underline'
                >
                  GitHub
                </a>
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-blue-500 hover:underline'
                  >
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
