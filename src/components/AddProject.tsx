import AddIcon from "@mui/icons-material/Add";
import { setModalOpen } from "../utils/modalSlice";
import { useAppDispatch } from "../utils/appStore";

const AddProject = () => {
  const dispatch = useAppDispatch();
  return (
    <div>
      <input
        type="text"
        placeholder="Enter Project Name"
        className="placeholder:italic w-10/12 text-xl h-10 p-2 focus:outline-none"
      />
      <button className="w-2/12" onClick={() => dispatch(setModalOpen(true))}>
        <span className="text-red-500 text-sm mr-1">
          <AddIcon className="text-sm" />
        </span>
        <span className="text-black text-md">Add a project</span>
      </button>
    </div>
  );
};

export default AddProject;
