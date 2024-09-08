const Error = () => {
  return (
    <div className="text-center d-flex flex-column align-items-center justify-content-center position-absolute top-50 start-50 translate-middle">
      <h1 className="mb-4 text-danger fw-bold">
        Oops! That page can’t be found.
      </h1>
      <p className="fs-5">
        It looks like nothing was found at this location. Maybe try one of the
        links in the menu or press back to go to the previous page.
      </p>
    </div>
  );
};

export default Error;
