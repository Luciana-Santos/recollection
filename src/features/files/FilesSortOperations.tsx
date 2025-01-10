import SortBy from '@/ui/SortBy'

function FilesSortOperations() {
  return (
    <div className="pt-5 right-0 self-end">
      <SortBy
        options={[
          { value: 'name-asc', label: 'Sort by name (A-Z)' },
          { value: 'name-desc', label: 'Sort by name (Z-A)' },
          { value: 'date-asc', label: 'Sort by date (earlier first)' },
          { value: 'date-desc', label: 'Sort by date (recent first)' },
        ]}
      />
    </div>
  )
}

export default FilesSortOperations
