import axios from "axios";
import React, { useEffect, useState } from "react";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    await axios
      .get("https://66371223288fedf6937f5636.mockapi.io/USERS")
      .then((res) => setProducts(res.data))
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <div className="container">
        <div className="row row-cols-1 row-cols-md-3 g-4 text-center">
          {products.map((item, index) => (
            <div key={index} className="col-md-4 mb-3">
              <div className="card h-100">
                <img
                  src={item.product_image}
                  className="card-img-top"
                  width={"100%"}
                  height={"350px"}
                  alt={item.product_name}
                />
                <div className="card-body">
                  <h5 className="card-title">{item.product_name}</h5>
                  <p className="card-text">{item.product_description}</p>
                  <p className="card-text">{item.product_price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;