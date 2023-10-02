const Pagination = (props) => {
  const handleClick = (e) => {
    props.getCurrentPage(e.target.innerText);
  };

  const handleDataLimitChange = (e) => {
    props.getPageLimit(e.target.value);
  };

  let pageBtn = [];
  for (let i = 0; i < props.totalPage; i++) {
    pageBtn.push(
      <div className="page-link" key={i}>
        <a href="#" onClick={handleClick}>
          {i + 1}
        </a>
      </div>
    );
  }
  return (
    <>
      <div className="pagination">
        {pageBtn}
        <select
          className="dataPerPage"
          name="dataPerPage"
          onChange={handleDataLimitChange}
        >
          <option value="5">5</option>
          <option value="10" selected>
            10
          </option>
          <option value="15">15</option>
          <option value="20">20</option>
        </select>
      </div>
      <div></div>
    </>
  );
};

export default Pagination;
