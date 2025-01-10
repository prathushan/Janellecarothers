import { Link } from 'react-router-dom';
import images from './ImageData';

const Portfolio = ({filterId}) => {
  return (
    <section>
      <div className="custom-map-out-flex">
        {images
        .filter((image)=>image.id !==filterId)
        .map((image) => {
          return (
            <div className="custom-portfolio-image-indi" key={image.id}>
              <div className="custom-portfolio-img-width">
                <Link to={`/image/${image.id}`}>
                  <img
                    src={image.src}
                    alt={image.name}
                    loading="lazy"
                  />
                </Link>
                {/* <p>{image.name}</p>+ */}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;