import supabase, { supabaseUrl } from './supabase'

export async function getFiles() {
  const { data: files, error } = await supabase.from('files').select('*')

  if (error) {
    console.error(error)
    throw new Error('Files could not get loaded')
  }

  return files
}

export async function getFile(id: string | null) {
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

export async function uploadFile(newFile) {
  const imageName = `${Math.random()}-${newFile.image.name}`.replaceAll('/', '')
  const imagePath = `${supabaseUrl}/storage/v1/object/public/recollection-images/${imageName}`

  // ? Cria o arquivo
  const { data, error } = await supabase
    .from('files')
    .insert([{ ...newFile, image: imagePath }])

  if (error) {
    console.error(error)
    throw new Error('File could not be uploaded')
  }

  // ? Upload da imagem
  const { error: storageError } = await supabase.storage
    .from('recollection-images')
    .upload(imageName, newFile.image)

  // ? Deleta o arquivo se der erro no upload da imagem
  if (storageError) {
    await supabase.from('files').delete().eq('id', data.id)
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
