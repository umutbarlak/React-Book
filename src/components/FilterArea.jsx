import { useSearchParams } from "react-router-dom";

const FilterArea = () => {
  const [searchParams, setsearchParams] = useSearchParams();

  const handleChange = (e) => {
    searchParams.set("sırala", e.target.value);
    setsearchParams(searchParams);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    searchParams.set("aramaTerimi", e.target[0].value);
    setsearchParams(searchParams);
  };

  return (
    <div className="mt-3 d-flex justify-content-between  gap-1 align-items-center">
      <div className="d-flex  gap-2 align-items-center">
        <label>Sırala</label>
        <select
          defaultValue={searchParams.get("sırala")}
          onChange={handleChange}
          className="form-select w-100"
        >
          <option>a-z</option>
          <option>z-a</option>
        </select>
      </div>
      <form onSubmit={handleSubmit} className="d-flex gap-1">
        <input
          placeholder="Kitap ismi giriniz"
          className="form-control w-100"
          type="text"
        />
        <button className="btn btn-primary">Ara</button>
      </form>
    </div>
  );
};

export default FilterArea;
