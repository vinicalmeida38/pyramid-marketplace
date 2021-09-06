import React from "react";
import { useLocation, useHistory } from "react-router-dom";
import SimpleHeader from "../../components/Header/SimpleHeader";

import checkCircle from "../../assets/images/check_circle.svg";
import "./Success.css";
import axios from "axios";

const Success = () => {
  const location = useLocation();
  const history = useHistory();
  const cartId = location.state;

  const handleSuccess = () => {
    axios.delete(`/api/shopping-cart/${cartId}`).then(() => {
      history.push({ pathname: "/" });
    });
  };

  return (
    <>
      <SimpleHeader />
      <div className="content-container success-page">
        <img src={checkCircle} alt="Success Check" />
        <h1 className="success-page__title">Compra finalizada</h1>
        <p>Seu pedido foi encaminhado para o vendedor</p>
        <button
          className="button-pyramid success-page__btn"
          onClick={() => handleSuccess()}
        >
          Retornar
        </button>
      </div>
    </>
  );
};

export default Success;
