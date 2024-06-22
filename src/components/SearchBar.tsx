import { useAppDispatch, useAppSelector } from "../utils/appStore";
import { setSearchText } from "../utils/searchSlice";
import { addTableData } from "../utils/tableDataSlice";

const SearchBar = () => {
  const dispatch = useAppDispatch();
  const { searchText } = useAppSelector((store) => store.search);
  const tableData = useAppSelector((store) => store.tableData.tableDatas);
  const filteredTableData = useAppSelector(
    (store) => store.tableData.filteredTableDatas
  );

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const getSearch = e.target.value;
    console.log(getSearch);
    if (getSearch.length > 0) {
      const searchData = tableData.filter((item) =>
        item.projectName.toLowerCase().includes(getSearch)
      );
      searchData.map((element) => dispatch(addTableData(element)));
    } else {
      filteredTableData.map((element) => dispatch(addTableData(element)));
    }
    dispatch(setSearchText(getSearch));
  };

  return (
    <form className="w-3/12 h-10 border border-gray-500 rounded-md p-2">
      <input
        value={searchText}
        type="text"
        placeholder="Search Anything"
        className="placeholder:italic focus:outline-none"
        onChange={handleSearch}
      />
    </form>
  );
};

export default SearchBar;
