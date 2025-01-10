const Addeditems = (data) => {
  return (
    <div className="container">
      <div className="row kg-row">
        <div className="col-4">
          <h1>{data.props.name}</h1>
        </div>
        <div className="col-4">{data.props.date}</div>
        <div className="col-2">
          <button type="button " className="btn btn-danger kg-button">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};
export default Addeditems;
