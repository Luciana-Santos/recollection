import * as z from 'zod'

const MAX_FILE_SIZE = 5000000
const ACCEPTED_IMAGE_TYPES = [
  'image/jpeg',
  'image/jpg',
  'image/png',
  'image/webp',
]

export const formSchema = z.object({
  tag: z.string().min(1, { message: 'At least 1 must be selected.' }),
  link: z
    .string()
    .startsWith('https://', { message: 'Must provide secure URL.' })
    .optional(),
  image: z
    .any()
    .optional()
    .refine(
      (file) =>
        file.length == 1
          ? ACCEPTED_IMAGE_TYPES.includes(file?.[0]?.type)
            ? true
            : false
          : true,
      'Invalid file. choose either JPEG or PNG image',
    )
    .refine(
      (file) =>
        file.length == 1
          ? file[0]?.size <= MAX_FILE_SIZE
            ? true
            : false
          : true,
      'Max file size allowed is 8MB.',
    ),
  notes: z.string().optional(),
  title: z
    .string()
    .min(3, { message: 'Must be 3 or more characters long.' })
    .trim(),
})

export type FormSchemaType = z.infer<typeof formSchema>
