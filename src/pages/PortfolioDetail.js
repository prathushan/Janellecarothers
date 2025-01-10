import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import Portfolio from "./Portfolio";
import images from './ImageData';

const PortfolioDetail = () => {
    const { id } = useParams();
    const image = images.find((img) => img.id === parseInt(id));
    const navigate = useNavigate();
    const [showShare, setShowShare] = useState(false);

    if (!image) {
        return <div>Image not found</div>;
    }

    // Get previous and next image IDs
    const currentIndex = images.findIndex((img) => img.id === parseInt(id));
    const prevImage = images[(currentIndex - 1 + images.length) % images.length];
    const nextImage = images[(currentIndex + 1) % images.length];

    return (
        <div>
            <div className="portfolio-detail-container">

                <div className="share-options">
                    {/* Share Button */}
                    <button
                        className="share-button"
                        onClick={() => setShowShare(!showShare)}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="16" height="16">
                            <path d="M352 320c-22.38 0-42.5 8.986-57.25 23.5l-128.9-64.45C168.4 274.7 176 258.1 176 240s-7.637-34.69-18.12-39.06L286.1 136.5C301.6 151.1 321.6 160 344 160c53.02 0 96-42.98 96-96S397 0 344 0S248 42.98 248 96c0 18.07 7.607 34.68 18.12 39.06L140.1 215.5C125.6 200.1 105.6 192 83.99 192C30.98 192-13.01 234.1-13.01 288S30.98 384 83.99 384c22.38 0 42.5-8.986 57.25-23.5l128.9 64.45C279.6 373.3 272 389.9 272 408c0 53.02 42.98 96 96 96S448 461 448 408S405 320 352 320z" />
                        </svg> Share
                    </button>

                    {/* Social Media Links */}
                    {showShare && (
                        <div className="share-links">
                            <a
                                href={`https://www.facebook.com/sharer/sharer.php?u=http://janellecarothers.com/portfolio.html#img${image.id}`}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" width="16" height="16">
                                    <path d="M279.14 288l14.22-92.66h-88.91V150.75c0-25.35 12.42-50.06 52.24-50.06H293V6.26S273.67 0 248.16 0c-73.3 0-121.36 44.38-121.36 124.72v70.62H88v92.66h38.81V512h94.93V288z" />
                                </svg>
                            </a>
                            <a
                                href={`https://twitter.com/intent/tweet?url=http://janellecarothers.com/portfolio.html#img${image.id}`}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="16" height="16">
                                    <path d="M459.37 151.716a162.15 162.15 0 01-46.62 12.821c16.77-10.047 29.63-25.923 35.781-44.92-15.66 9.294-32.995 16.071-51.482 19.742a81.88 81.88 0 00-139.344 74.644c-68.054-3.437-128.36-36.02-168.656-85.556-7.055 12.134-11.091 26.272-11.091 41.352 0 28.536 14.465 53.69 36.485 68.4-13.45-.42-26.12-4.126-37.23-10.252v1.004c0 39.842 28.288 73.02 65.834 80.573-6.896 1.872-14.15 2.87-21.625 2.87-5.299 0-10.44-.49-15.505-1.4 10.455 32.704 40.798 56.516 76.7 57.228-28.1 22.038-63.485 35.142-102 35.142-6.622 0-13.17-.39-19.623-1.143C59.738 420.09 131.076 436 207.77 436c97.06 0 150.3-80.462 150.3-150.3l-.165-6.834c10.339-7.463 19.225-16.81 26.318-27.46z" />
                                </svg>
                            </a>
                            <a
                                href={`https://pinterest.com/pin/create/button/?url=http://janellecarothers.com/portfolio.html#img${image.id}`}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" width="16" height="16">
                                    <path d="M248 8C111.033 8 0 119.033 0 256c0 108.244 71.507 200.652 170.868 234.664c-2.364-19.987-4.51-50.721 0-72.586c5.15-25.76 33.002-139.196 33.002-139.196s-8.248-16.472-8.248-40.856c0-38.349 22.244-66.975 49.92-66.975c23.56 0 34.915 17.69 34.915 38.898c0 23.674-15.072 59.075-22.831 91.95c-6.494 28.117 13.785 51.046 41.006 51.046c49.212 0 82.406-63.214 82.406-137.938c0-57.067-38.465-99.743-108.412-99.743c-78.926 0-128.14 58.675-128.14 119.423c0 23.679 9.423 49.138 21.171 62.952c2.391 2.835 2.737 4.28 1.992 7.788c-1.491 7.076-4.88 22.652-5.516 25.714c-.856 3.837-3.35 5.184-7.503 3.146c-28.186-13.703-45.854-56.703-45.854-91.116c0-74.436 58.593-162.19 174.514-162.19c93.732 0 155.942 67.247 155.942 139.052c0 96.254-53.209 167.96-131.677 167.96c-26.414 0-51.27-14.284-59.79-30.604l-16.306 61.942c-5.935 22.595-22.063 50.788-32.95 67.994C251.918 499.395 249.03 501.114 248 502c135.996 0 248-111.033 248-248S384.967 8 248 8z" />
                                </svg>
                            </a>
                        </div>
                    )}
                </div>

                <div className="image-container">
                    {/* <h1>{image.name}</h1> */}
                    <img
                        src={image.src}
                        alt={image.name}
                        loading="lazy"
                        style={{ width: '100%', maxWidth: '700px' }}
                    />
                </div>

                <div className="navigation-buttons">
                    {/* Previous and Next Buttons */}
                    <button onClick={() => navigate(`/image/${prevImage.id}`)}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" width="16" height="16">
                            <path d="M224 480c-8.188 0-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L109.3 256l137.4 137.4c12.5 12.5 12.5 32.75 0 45.25C240.4 476.9 232.2 480 224 480z" />
                        </svg>
                    </button>
                    <button onClick={() => navigate(`/image/${nextImage.id}`)}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" width="16" height="16">
                            <path d="M96 480c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L210.8 256L73.38 118.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25l-160 160C112.4 476.9 104.2 480 96 480z" />
                        </svg>
                    </button>
                </div>




            </div>
            {/* Related Images */}
            <Portfolio filterId={image.id} />
        </div>
    );
};

export default PortfolioDetail;
