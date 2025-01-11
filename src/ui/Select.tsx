function Select({ options, value, onChange, ...props }) {
  return (
    <div className="relative">
      <select
        value={value}
        onChange={onChange}
        {...props}
        className="appearance-none w-full text-base font-normal p-2.5 pr-6 bg-gray-700 border-none focus:outline-none focus:ring-0"
      >
        {options.map((option) => (
          <option
            value={option.value}
            key={option.value}
            className="hover:bg-cyan-700"
          >
            {option.label}
          </option>
        ))}
      </select>
      <div className="absolute top-1/2 right-2 transform -translate-y-1/2 pointer-events-none">
        <svg
          className="w-3 h-3 text-gray-300"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 320 512"
          fill="currentColor"
        >
          <path d="M31.5 192H288.5C304.6 192 313.2 211.2 302.6 222.6L174.1 351.1C168.2 357.1 159.8 357.1 153.9 351.1L25.39 222.6C14.81 211.2 23.38 192 39.48 192H31.5z" />
        </svg>
      </div>
    </div>
  )
}

export default Select
