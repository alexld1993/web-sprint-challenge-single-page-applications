import React from "react";
import { useHistory } from "react-router-dom";

export default function Home() {
  const history = useHistory();
  const routeToShop = () => {
    console.log(history);
    history.push("/Pizza.js");
  };

  return (
    <div className="home-wrapper">
      <img
        className="home-image"
        src="https://images.unsplash.com/photo-1513104890138-7c749659a591?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8cGl6emF8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
        alt=""
      />
      <button onClick={routeToOrder} className="md-button order-button">
        Order now!
      </button>
    </div>
  );
}
