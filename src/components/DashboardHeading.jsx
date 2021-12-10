import SearchBar from "./SearchBar"

const DashboardHeading = ({heading}) => {
    return (
        <div className="flex justify-between items-start my-10">
          <h1 className="text-xl md:text-3xl text-blue-400 font-bold leading-relaxed tracking-wide">{heading}</h1>
          <SearchBar />
        </div>
    )
}

export default DashboardHeading
