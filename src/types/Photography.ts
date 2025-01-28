export interface Photo {
  id: string
  title: string
  category: 'landscape' | 'portrait' | 'street'
  filename: string
  description?: string
}
