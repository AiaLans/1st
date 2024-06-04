import "./app-filter.css";
const AppFilter = () => {
  return (
    <div className="btn-group">
      <button className="btn btn-light" type="button">
        All
      </button>
      <button className="btn btn-outline-light" type="button">
        Completed
      </button>
      <button className="btn btn-outline-light" type="button">
        Uncompleted
      </button>
    </div>
  );
};

export default AppFilter;