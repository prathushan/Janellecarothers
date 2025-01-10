const Book=({content})=>{
    return (
<section class="main-content mixtape-page">
    <div class="container">
       <div class="blocks clearfix">
           <div class="about-content">
            {content}
          </div>
       </div>
    </div>
</section>
    );
}

export default Book;