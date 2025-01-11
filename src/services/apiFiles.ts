import supabase, { supabaseUrl } from './supabase'

type GetFiles = {
  tag?: number
  sortBy?: {
    field: string
    direction: string
  }
}

export async function getFiles({
  tag,
  sortBy = { field: 'created_at', direction: 'asc' },
}: GetFiles) {
  let query = supabase.from('files').select('*')

  if (tag !== undefined) query = query.eq('tag', tag)

  if (sortBy)
    query = query.order(sortBy.field, {
      ascending: sortBy.direction === 'asc',
    })

  const { data: files, error } = await query

  if (error) {
    console.error(error)
    throw new Error('Files could not get loaded')
  }

  return files
}

export async function getFile(id: string) {
  const { data: file, error } = await supabase
    .from('files')
    .select('*, tag(*)')
    .eq('id', id)
    .single()

  if (error) {
    console.error(error)
    throw new Error('File not found')
  }

  return file
}

export async function createEditFile(newFile?: any, id?: string | undefined) {
  const hasImagePath = newFile.image?.startsWith?.(supabaseUrl)

  const imageName = `${Math.random()}-${newFile.image.name}`.replace(/\//g, '')
  const imagePath = hasImagePath
    ? newFile.image
    : `${supabaseUrl}/storage/v1/object/public/recollection-images/${imageName}`

  // Cria/Edita arquivo
  let queryResult

  // Cria
  if (!id) {
    queryResult = supabase
      .from('files')
      .insert([{ ...newFile, image: imagePath }])
  }

  // Edita
  if (id) {
    queryResult = supabase
      .from('files')
      .update({ ...newFile, image: imagePath })
      .eq('id', id)
  }

  const { data, error } = await queryResult.select().single()

  if (error) {
    console.error(error)
    throw new Error('File could not be uploaded')
  }

  // Upload da imagem
  const { error: storageError } = await supabase.storage
    .from('recollection-images')
    .upload(imageName, newFile.image)

  // Remove o arquivo se der erro no upload da imagem
  if (storageError) {
    await supabase.from('files').delete().eq('id', data[0].id)
    console.error(storageError)
    throw new Error('Image could not be loaded and the file was not uploaded')
  }

  return data
}

export async function deleteFile(id: string) {
  const { data, error } = await supabase.from('files').delete().eq('id', id)

  if (error) {
    console.error(error)
    throw new Error('File could not be uploaded')
  }

  return data
}
