import { Link } from "react-router-dom";
import StoryList from "./StoryList";

const MainPage = () => {
  return (
    <div className="container d-flex flex-column align-items-center gap-5 my-5 s">
      <img className="img-fluid rounded" src={"/welcome.gif"} />

      <p className="text-center">
        <Link className="fs-4 text-white badge bg-info" to={"/ürünler"}>
          Ürünler Sayfasından
        </Link>
        <br />
        <br />
        Yeni çıkan bütün kitaplara ulaşabilirsiniz
      </p>
    </div>
  );
};

export default MainPage;
