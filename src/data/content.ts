import { FileText, Image, Link, Play } from 'lucide-react'

export const subMenuItems = [
  {
    id: 1,
    name: 'documents',
    path: '/documents',
    icon: FileText,
  },
  {
    id: 2,
    name: 'images',
    path: '/images',
    icon: Image,
  },
  {
    id: 3,
    name: 'links',
    path: '/links',
    icon: Link,
  },
  {
    id: 4,
    name: 'videos',
    path: '/videos',
    icon: Play,
  },
]

export const mockDataModal = [
  {
    id: '1',
    title: 'roadmaps',
    image: '',
    created_at: '2023-01-31T00:00:00.000Z',
    tag: 'links',
    notes:
      'um site com diversos roadmaps para ajudar nos estudos de programação',
    link: 'https://roadmap.sh/',
  },
  {
    id: '2',
    title: 'motivação diária',
    image: 'https://i.postimg.cc/vT6H0xf7/motivation.jpg',
    created_at: '2025-03-24T00:00:00.000Z',
    tag: 'images',
    notes: '',
    link: '',
  },
  {
    id: '3',
    title: 'playlist épica',
    image: '',
    created_at: '2025-06-02T00:00:00.000Z',
    tag: 'videos',
    notes: '',
    link: 'https://www.youtube.com/watch?v=EMesDsiesew&pp=ygURZXBpYyBtdXNpYyBiYXR0bGU%3D',
  },
]
