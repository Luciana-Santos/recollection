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
