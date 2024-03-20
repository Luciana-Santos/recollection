type TagItem = {
  children: React.ReactNode
  name: string
}

export default function TagItem({ children, name }: TagItem) {
  return (
    <fieldset>
      <input
        type="checkbox"
        name={name}
        id={name}
        className="invisible opacity-0 absolute"
      />
      <label htmlFor={name} className="checkbox">
        {children}
      </label>
    </fieldset>
  )
}
