import React from "react";
import { Link } from "react-router-dom";
import SimpleHeader from "../../components/Header/SimpleHeader";

import checkCircle from "../../assets/images/check_circle.svg";
import "./Success.css";

const Success = () => {
  return (
    <>
      <SimpleHeader />
      <div className="content-container success-page">
        <img src={checkCircle} alt="Success Check" />
        <h1 className="success-page__title">Compra finalizada</h1>
        <p>Seu pedido foi encaminhado para o vendedor</p>
        <Link to="/">
          <button className="button-pyramid success-page__btn">Retornar</button>
        </Link>
      </div>
    </>
  );
};

export default Success;
