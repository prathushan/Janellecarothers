import {useNavigate} from 'react-router-dom';

const Boxes=()=>{
    const navigate=useNavigate();

    const handleImageClick=(path)=>{
        navigate(path);

    };

    return(
        <section className="main-content">
        <div className="container">
          <div className="blocks clearfix">
            <div className="block"  >
              <div className="block-inner  custom-nav-links" onClick={()=>handleImageClick('/resume')}>
                <img className="custom-big-images" src="https://dev-all-in-one-dev.pantheonsite.io/wp-content/uploads/2024/12/1.jpg" alt="resume" />
                <span className="block-meta">
                  <span className="name" >Resume</span>
                </span>
              </div>
            </div>
            <div className="block">
              <div className="block-inner custom-nav-links" onClick={()=>handleImageClick('/portfolio')}>
                <img className="custom-big-images" src="https://dev-all-in-one-dev.pantheonsite.io/wp-content/uploads/2024/12/2.jpg" alt="girl" />
                <span className="block-meta">
                  <span className="name">Portfolio</span>
                </span>
              </div>
            </div>
            <div className="block">
            <div className="block-inner custom-nav-links" onClick={()=>handleImageClick('/trailer-rental')}>
                <img className="custom-big-images" src="https://dev-all-in-one-dev.pantheonsite.io/wp-content/uploads/2024/12/4.jpeg" alt="icure" />
                <span  className="block-meta">
                  <span className="name">Trailer rental</span>
                </span>
              </div>
            </div>
            <div className="block">
            <div className="block-inner custom-nav-links" onClick={()=>handleImageClick('/book')}>
                <img src="https://dev-all-in-one-dev.pantheonsite.io/wp-content/uploads/2024/12/3.jpg" alt="mixtape"  className="custom-big-images"/>
                <span  className="block-meta">
                  <span className="name">Book</span>
                 
                </span>
              </div>
            </div>
            <div className="block">
              <div className="block-inner icurenudity custom-nav-links" onClick={()=>handleImageClick('/about')}>
                <img
                className="custom-big-images"
                 
                  src="https://dev-all-in-one-dev.pantheonsite.io/wp-content/uploads/2024/12/Perfect_Gentleman_Salon_Team_SMembers_Round-2.jpeg"
                  alt="iCURENudity"
                />
                <span  className="block-meta">
                  <span className="name">
                    <div className="icurelight">About</div>
                  </span>
                </span>
              </div>
            </div>
            <div className="block">
            <div className="block-inner custom-nav-links" onClick={()=>handleImageClick('/gentleman-lab')}>
                <img
                  className="custom-big-images"
                  src="https://dev-all-in-one-dev.pantheonsite.io/wp-content/uploads/2024/12/new_shop_page.jpeg"
                  alt="jewel"
                />
                <span  className="block-meta">
                  <span className="name">Gentleman's lab</span>
                </span>
              </div>
            </div>
            <div className="block about-content">
              <div className="about-author"></div>
            </div>
          </div>
        </div>
      </section>
      
    )
}
export default Boxes;