import SearchBar from "./SearchBar";
import Filter from "./Filter";
import AddProject from "./AddProject";
import ProjectTable from "./ProjectTable";

const AllProjects = () => {
  return (
    <div className="m-4 p-4">
      <p className="text-3xl font-semibold">My Work</p>
      <div className="flex mt-4 mb-1">
        <SearchBar />
        <Filter />
      </div>
      <div className="my-4 p-4 shadow-lg">
        <AddProject />
      </div>
      <div>
        <ProjectTable />
      </div>
    </div>
  );
};

export default AllProjects;
