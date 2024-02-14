import axios from "axios";
import { useEffect, useState } from "react";
import Card from "../components/Card";

const StoryList = () => {
  const [books, setBooks] = useState();

  useEffect(() => {
    axios
      .get(`http://localhost:3090/books?type=story`)
      .then((res) => setBooks(res.data));
  }, []);

  return (
    <div className="d-flex justify-content-center justify-content-md-start  flex-wrap gap-4">
      {books?.map((book) => (
        <Card key={book.id} book={book} />
      ))}
    </div>
  );
};

export default StoryList;
