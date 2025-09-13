import { Search, Filter } from "lucide-react"
function SearchBar({searchTerm, setSearchTerm}){
  return(
    <div className="flex-1 relative">
      <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white h-5 w-5" />
      <input
        type="text"
        placeholder="Search study sets..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full bg-white/5 border border-white/10 rounded-2xl pl-12 pr-6 py-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 "
      />
    </div>
  )
}
function FilterBar({filterBy, setFilterBy}){
  return (
    <div className="flex items-center space-x-4">
      <div className="relative">
        <Filter className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white h-5 w-5" />
        <select
          value={filterBy}
          onChange={(e) => setFilterBy(e.target.value)}
          className="bg-white/5 border border-white/10 rounded-2xl pl-12 pr-8 py-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 appearance-none cursor-pointer"
        >
          <option value="all" className="bg-gray-900">All Sets</option>
          <option value="recent" className="bg-gray-900">Recently Studied</option>
          <option value="completed" className="bg-gray-900">Completed</option>
          <option value="in-progress" className="bg-gray-900">In Progress</option>
          <option value="not-started" className="bg-gray-900">Not Started</option>
        </select>
      </div>
    </div>
  )
}
export function SaFbar({filterBy, setFilterBy, searchTerm, setSearchTerm}){
    return (
        <div className="flex flex-col lg:flex-row gap-6">
            <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
            <FilterBar filterBy={filterBy} setFilterBy={setFilterBy}/>
        </div>
    )
}