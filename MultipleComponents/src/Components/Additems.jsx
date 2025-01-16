function Additems() {
  return (
    <div className="container">
      <div className="row kg-row">
        <div className="col-4">
          <input type="text" placeholder="Enter the user list" />
        </div>
        <div className="col-4">
          <input type="date" />
        </div>
        <div className="col-2">
          <button type="button " className="btn btn-primary kg-button">
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
export default Additems;
