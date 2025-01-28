import Image from 'next/image'
import { getPhotos } from '@/lib/photography'

export default function PhotographyPage() {
  const photos = getPhotos()

  return (
    <div>
      <h1 className='text-3xl font-bold mb-4'>My Photography</h1>

      <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
        {photos.map((photo) => (
          <div key={photo.id} className='relative group'>
            <Image
              src={photo.filename}
              alt={photo.title}
              width={400}
              height={300}
              className='w-full h-64 object-cover rounded-lg 
                         transition-transform duration-300 
                         group-hover:scale-105'
            />
            <div
              className='absolute bottom-0 left-0 right-0 
                            bg-black bg-opacity-50 text-white 
                            p-2 opacity-0 group-hover:opacity-100 
                            transition-opacity duration-300'
            >
              <p>{photo.title}</p>
              <p className='text-sm'>{photo.category}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
