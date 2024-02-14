import { useEffect } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";

const CategoryPage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/kategori/hikaye");
  }, []);
  return (
    <div className="d-block d-md-flex align-items-start justify-content-between gap-4 row-gap-5 p-4 ">
      <aside className="aside bg-white mb-4 p-5 rounded-4 d-flex flex-column mx-auto gap-2 ">
        <NavLink to={"/kategori/hikaye"}> Hikaye</NavLink>
        <NavLink to={"/kategori/roman"}>Roman</NavLink>
      </aside>

      {/* asıl sayfa içeriği */}
      <Outlet />
    </div>
  );
};

export default CategoryPage;
