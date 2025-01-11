import SortBy from '@/ui/SortBy'

function FilesSortOperations() {
  return (
    <div className="pt-5 right-0 self-end">
      <SortBy
        options={[
          { value: 'title-asc', label: 'Sort by name (A-Z)' },
          { value: 'title-desc', label: 'Sort by name (Z-A)' },
          { value: 'created_at-asc', label: 'Sort by date (earlier first)' },
          { value: 'created_at-desc', label: 'Sort by date (recent first)' },
        ]}
      />
    </div>
  )
}

export default FilesSortOperations
