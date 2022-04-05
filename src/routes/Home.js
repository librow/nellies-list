import BookGrid from "../components/books/BookGrid";
import CoverImg from "../assets/matias-north-v8DSLoY80Xk-unsplash.jpg";
import Search from "../components/Search";

function Home() {
    // NEEDS WORK: style the img so it's not so big

    return (
      <>
        <img src={CoverImg} alt="cover" />
        <Search />
        <BookGrid />
      </>
    );
  }
  
  export default Home;