import BookGrid from "../components/books/BookGrid";
import CoverImg from "../assets/matias-north-v8DSLoY80Xk-unsplash.jpg";

function Home() {
    
    // Fade Animation credit: https://coolcssanimation.com/element-fade-out-on-scroll/
    const SCROLL_ELEMENT_ID = "img";

    function fadeOutOnScroll(element) {
        if (!element) {
            return;
        }
    
        let distanceToTop = window.pageYOffset + element.getBoundingClientRect().top;
        let elementHeight = element.offsetHeight;
        let scrollTop = document.documentElement.scrollTop;
        
        let opacity = 1;
        
        if (scrollTop > distanceToTop) {
            opacity = 1 - (scrollTop - distanceToTop) / elementHeight;
        }
        
        if (opacity >= 0) {
            element.style.opacity = opacity;
        }
    }

    function scrollHandler() {
        fadeOutOnScroll(document.getElementById(SCROLL_ELEMENT_ID));
    }

    window.addEventListener('scroll', scrollHandler);

    return (
      <>
        <img id="img" src={CoverImg} alt="cover" />
        <BookGrid />
      </>
    );
  }
  
  export default Home;