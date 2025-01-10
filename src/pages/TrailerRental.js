const TrailerRental=()=>{
    const images=[
        { id: 1, name: 'img-1', src: require('../assets/images/icure.jpg') },
        { id: 2, name: 'img-2', src: require('../assets/images/trailers.jpg') },
        { id: 3, name: 'img-3', src: require('../assets/images/room.jpg') },
        { id: 4, name: 'img-4', src: require('../assets/images/room-faded.jpg') },
        { id: 5, name: 'img-5', src: require('../assets/images/glasses.jpg') }
    ];
    


    return (
        <div className="custom-con-center">
            <h1 className="custom-email-text" >EMAIL FOR RATES</h1>

            {images.map((image) => {
          return (
            <div className="custom-portfolio-image-indi" key={image.id}>
              <div className="custom-portfolio-img-width">
           
                  <img
                    src={image.src}
                    alt={image.name}
                    loading="lazy"
                  />             
              </div>
            </div>
          );
        })}

                   <div class="about-author">
                        <strong className="custom-we-price"> WE PRICE MATCH! </strong> //
                        <a className='custom-mail-trailer' href={`mailto:janellenicolecarothers@gmail.com`} target="_blank" class="small"> <strong>JANELLENICOLECAROTHERS@GMAIL.COM </strong> </a> // i CURE
                        NUDITY INC. // DIMENSIONS // HEIGHT 13′ 5′′ // LENGTH
                        48′ // WIDTH 8′ 7′′ // WASHER AND DRYER // DOUBLE
                        DECKER ROWS OF RACK SPACE // REFRIGERATOR //
                        MICROWAVE // CENTRAL AIR // COMMON AREA // WORK
                        SPACES // DOUBLE ENTRANCE // LIFT GATE // SMART TV //
                        KOHLER GENERATOR 20K
                    </div>


        </div>
    )

}

export default TrailerRental;