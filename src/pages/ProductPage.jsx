import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import FilterArea from "../components/FilterArea";
import { useSearchParams } from "react-router-dom";

const ProductPage = () => {
  const [books, setBooks] = useState(null);
  const [searchParams, SetSearchParams] = useSearchParams();

  const order = searchParams.get("sırala");
  const query = searchParams.get("aramaTerimi");

  const options = {
    params: {
      _sort: order === "z-a" ? "-title" : "title",
      q: query,
    },
  };

  useEffect(() => {
    axios
      .get("http://localhost:3090/books", options)
      .then((res) => {
        setBooks(res.data);
        console.log(res.data);
      })
      .catch((error) => console.log(error));
  }, [order, query]);

  return (
    <div className="mx-5 my-3 ">
      <h3>{books?.length} kitap bulundu</h3>

      <FilterArea />

      <div className="card-container d-flex justify-content-center">
        {books?.map((book) => (
          <Card key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default ProductPage;
