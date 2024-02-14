import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const ProductDetail = () => {
  const [book, setBook] = useState(null);

  const navigate = useNavigate();

  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:3090/books/${id}`)
      .then((res) => {
        setBook(res.data);
      })
      .catch((error) => {
        console.log(error);
        navigate("/undefined", { state: error.response.status });
      });
  }, []);

  return (
    <div>
      {!book && <p>yüklenitor</p>}

      {book && (
        <div className="row my-5 p-5 d-flex justify-content-center">
          <div className="col-md-5 d-flex justify-content-center align-items-center">
            <img
              className="img-fluid rounded shadow"
              style={{ maxHeight: "400px" }}
              src={book.image}
              alt={book.title}
            />
          </div>

          <div className="col-md-5 d-flex flex-column justify-content-center align-items-center my-3">
            <h1>{book.title}</h1>

            <div className="my-4 mx-auto">
              <BookInfo title={"Yazar"} value={book.author} />
              <BookInfo title={"Açıklama"} value={book.description} />
              <BookInfo title={"Yıl"} value={book.year} />
              <BookInfo title={"Sayfa Sayısı"} value={book.author} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;

const BookInfo = ({ title, value }) => {
  return (
    <p style={{ maxWidth: "500px" }}>
      <span className="badge bg-danger me-3 fs-4 fs-1">{title}</span>
      <span className="fs-6">{value}</span>
    </p>
  );
};
