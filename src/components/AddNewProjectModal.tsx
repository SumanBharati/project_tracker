const AddNewProjectModal = () => {
  return (
    <div>
      <form onSubmit={(e) => e.preventDefault()}>
        <h1 className="text-xl font-bold">Mall of New Hampshire - Lobby</h1>
        <div className=" h-10 border border-gray-500 rounded-md p-2 my-2 ">
          <label>Status </label>
          <input type="dropdown" />
        </div>
        <div className=" h-10 border border-gray-500 rounded-md p-2 my-2">
          <label>Assigned to </label>
          <input type="text" />
        </div>
        <div className="border border-gray-500 rounded-md p-2 my-2">
          <label>Completed Tasks</label>
          <input type="textarea" />
        </div>
        <div className="border border-gray-500 rounded-md p-2 my-2">
          <label>Active Tasks</label>
          <input type="textarea" />
        </div>
        <button className="w-full text-white border border-gray-500 rounded-md p-2 my-2 bg-purple-600">Save</button>
      </form>
    </div>
  );
};

export default AddNewProjectModal;
