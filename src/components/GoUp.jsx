const GoUp = () => {
  return (
    <div className="position-fixed bottom-0 end-0 p-3 d-block d-sm-none">
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="btn btn-danger"
      >
        <i class="bi bi-arrow-up" />
      </button>
    </div>
  );
};

export default GoUp;
