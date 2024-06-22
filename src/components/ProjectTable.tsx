import { useEffect } from "react";
import { tableDataFromConstants } from "../utils/constants";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useAppSelector, useAppDispatch } from "../utils/appStore";
import { addFilteredTableData, addTableData } from "../utils/tableDataSlice";

const ProjectTable = () => {
  const { searchText } = useAppSelector((store) => store.search);

  const dispatch = useAppDispatch();
  const tableData = useAppSelector((store) => store.tableData.tableDatas);

  useEffect(() => {
    tableDataFromConstants.map((element) => {
      dispatch(addTableData(element));
      dispatch(addFilteredTableData(element));
    });
  }, []);

  return (
    <div>
      <table className="my-2 table-auto text-gray-700 text-sm/[35px] w-full ">
        <thead className="bg-gray-300">
          <tr className="border border-bottom h-10 text-left">
            <th className="pl-2">Project</th>
            <th className="pl-2">Status</th>
            <th className="pl-2">Assigned to</th>
            <th className="pl-2">Completed Tasks</th>
            <th className="pl-2">Active Tasks</th>
            <th className="pl-2"></th>
          </tr>
        </thead>
        <tbody>
          {tableData
            .filter((element) =>
              searchText.toLowerCase() === ""
                ? element
                : element.projectName.toLowerCase().includes(searchText)
            )
            .map((element) => (
              <tr className="border border-bottom text-left">
                <td className="pl-2">{element.projectName}</td>
                <td className="pl-2">{element.status}</td>
                <td className="pl-2">{element.assignedTo}</td>
                <td className="pl-2">{element.completedTasks}</td>
                <td className="pl-2">{element.activeTasks}</td>
                <td className="pl-2">
                  <button className=" text-purple-800"><EditIcon /></button>
                  <button className=" text-sm text-red-400"><DeleteIcon /></button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProjectTable;
