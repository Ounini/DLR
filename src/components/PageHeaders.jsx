export const PageHeaders = ({ img, imgAbout, pageHeader, pageShorty }) => {
  return (
    <div className="position-relative overlay-container">
      <img src={img} alt={imgAbout} className="img-fluid" />
      <div className="overlay"></div>
      <h3 className="position-absolute top-50 start-50 translate-middle text-white fw-bolder">
        {pageHeader}
      </h3>
      <span className="position-absolute text-white fw-bolder spanAbouts translate-middle">
        "{pageShorty}"
      </span>
    </div>
  );
};
