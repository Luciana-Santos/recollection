import supabase from './supabase'

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

export async function deleteFile(id) {
  const { data, error } = await supabase.from('files').delete().eq('id', id)

  if (error) {
    console.error(error)
    throw new Error('File could not be uploaded')
  }

  return data
}
