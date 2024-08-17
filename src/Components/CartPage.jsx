import axios from "axios";
import { default as React, useEffect, useState } from "react";
import { ClipLoader } from 'react-spinners';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useGlobelContext } from "../Context/ProductContext";

function CartPage() {
  const { price, cart, cartAdded, count } = useGlobelContext();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    LoadProduct();
  }, []);

  const LoadProduct = async () => {
    try {
      const response = await axios.get(
        "https://www.themealdb.com/api/json/v1/1/categories.php"
      );
      setProduct(response.data.categories);
    } catch (error) {
      toast.error("Failed to load products. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const handleAddToCart = (product) => {
    try {
      // toast.info("Product added to cart!");
      cartAdded(product);
      // const notify = () => toast("Wow so easy!");
    } catch (error) {
      toast.error("Failed to add product to cart. Please try again.");
    }
  };

  return (
    <>
      <h1>Cart Page</h1>
      {loading ? (
        <div>
          <h2>Loading....</h2>
          <ClipLoader color="#de1818" loading={loading} size={100} />
        </div>
      ) : (
        <div className="d-flex flex-row flex-wrap justify-content-around">
          {product.map((t, index) => (
            <div
              className="card shadow m-2"
              style={{ width: "18rem" }}
              key={index}
            >
              <img src={t.strCategoryThumb} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{t.strCategory}</h5>
                <p
                  className="card-text"
                  style={{
                    maxHeight: "100px",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  {t.strCategoryDescription}
                </p>
                <div className="d-flex justify-content-around">
                  <h6>₹{price[index]}</h6>
                  <button
                    className="btn btn-primary"
                    onClick={() => handleAddToCart(t)}
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    <ToastContainer
        position="bottom-right"
        autoClose={1000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick={true}
        rtl={false}
        pauseOnFocusLoss={true}
        draggable={true}
        pauseOnHover={true}
      />
    </>
  );
}

export default CartPage;


