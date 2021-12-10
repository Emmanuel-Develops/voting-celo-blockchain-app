import SearchBar from "./SearchBar"

const DashboardHeading = ({heading, searchTerm, update}) => {
    return (
        <div className="flex justify-between items-start my-10">
          <h1 className="text-xl md:text-3xl text-blue-400 font-bold leading-relaxed tracking-wide">{heading}</h1>
          <SearchBar query={searchTerm} setQuery={update} />
        </div>
    )
}

export default DashboardHeading
