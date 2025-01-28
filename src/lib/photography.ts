import { Photo } from '@/types/Photography'
import fs from 'fs'
import path from 'path'

export function getPhotos(): Photo[] {
  const categories = ['landscape', 'portrait', 'street']
  const photos: Photo[] = []

  categories.forEach((category) => {
    const categoryPath = path.join(
      process.cwd(),
      `public/photography/${category}`
    )
    const files = fs.readdirSync(categoryPath)

    files.forEach((file) => {
      if (file.endsWith('.jpg') || file.endsWith('.png')) {
        photos.push({
          id: file.replace(/\.[^/.]+$/, ''),
          title: file.replace(/\.[^/.]+$/, '').replace(/-/g, ' '),
          category: category as Photo['category'],
          filename: `/photography/${category}/${file}`,
          description: `A ${category} photograph`,
        })
      }
    })
  })

  return photos
}
