import React from "react";
import { useState } from "react";
import SimpleHeader from "../../components/Header/SimpleHeader";
import "./Payment.css";

const Payment = () => {
  const [creditCard, setCreditCard] = useState(false);
  const [bankSlip, setBankSlip] = useState(false);
  const [pix, setPix] = useState(false);

  const buttonStyle =
    creditCard || bankSlip || pix
      ? "button-pyramid"
      : "button-pyramid disabled-button-pyramid";

  return (
    <>
      <SimpleHeader />
      <div className="content-container">
        <h1 className="title-pyramid">Pagamento</h1>
        <hr />
        <form>
          <input
            className="payment-types__input"
            type="radio"
            name="payment"
            id="creditCard"
            onChange={(e) => setCreditCard(true)}
          />
          <label className="payment-types__label" htmlFor="creditCard">
            Cartão de crédito
          </label>
          <br />
          <input
            className="payment-types__input"
            type="radio"
            name="payment"
            id="bankSlip"
            onChange={(e) => setBankSlip(true)}
          />
          <label className="payment-types__label" htmlFor="bankSlip">
            Boleto bancário
          </label>
          <br />
          <input
            className="payment-types__input"
            type="radio"
            name="payment"
            id="pix"
            onChange={(e) => setPix(true)}
          />
          <label className="payment-types__label" htmlFor="pix">
            Pix
          </label>
          <br />
          <hr />
          <div className="step-button">
            <button className={buttonStyle} type="submit">
              Finalizar compra
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Payment;
