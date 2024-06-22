import AddProject from "./AddProject";
import ProjectTable from "./ProjectTable";
import Modal from "./Modal";
import { useAppDispatch, useAppSelector } from "../utils/appStore";
import { setModalOpen } from "../utils/modalSlice";
import AddNewProjectModal from "./AddNewProjectModal";

const RecentProjects = () => {
  const open = useAppSelector((store) => store.modal.open);

  const dispatch = useAppDispatch();

  return (
    <>
      <Modal open={open} onClose={() => dispatch(setModalOpen(false))}>
        <AddNewProjectModal />
      </Modal>
      <div className="m-4 p-4 shadow-lg">
        <AddProject />
      </div>

      <div className="m-4 p-4 ">
        <p className="text-2xl font-semibold">Recently visited</p>
        <ProjectTable />
      </div>
    </>
  );
};

export default RecentProjects;
