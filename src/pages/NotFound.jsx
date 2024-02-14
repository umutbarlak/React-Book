import React from "react";
import { Link, useLocation } from "react-router-dom";

const NotFound = () => {
  const { state } = useLocation();

  return (
    <div className="text-center my-5">
      <img
        src={
          "https://media1.giphy.com/media/14uQ3cOFteDaU/giphy.gif?cid=ecf05e47t59zhewa6grldcswz7mlq7uvc2b1g0jn0kr2ty9e&ep=v1_gifs_related&rid=giphy.gif&ct=g"
        }
        alt=""
      />
      <p className="my-3">Üzgünüz aradığınız sayfa bulunamadı</p>
      <Link className="text-white fs-3 badge bg-info" to={"/"}>
        Anasayfa
      </Link>

      {state && (
        <p className="fs-5 text-center mt-2">
          Hata kodunuz <span className="badge bg-warning">{state}</span>
        </p>
      )}
    </div>
  );
};

export default NotFound;
