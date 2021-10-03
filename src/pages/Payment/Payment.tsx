import React, { FormEvent } from "react";
import axios from "axios";
import { useLocation, useHistory } from "react-router-dom";
import SimpleHeader from "../../components/Header/SimpleHeader";
import "./Payment.css";

const Payment = () => {
  const [payment, setPayment] = React.useState("");
  const [cart, setCart] = React.useState({});
  const location = useLocation();
  const history = useHistory();

  React.useEffect(() => {
    axios
      .get("/api/shopping-cart")
      .then((res) => {
        setCart(res.data.shoppingCarts);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const buttonStyle =
    payment === ""
      ? "button-pyramid disabled-button-pyramid"
      : "button-pyramid";

  const handlePurchase = (event: FormEvent) => {
    event.preventDefault();
    axios
      .post("/api/checkout", {
        address: location.state,
        payment: payment,
        cart: cart,
      })
      .then(() => {
        history.push({
          pathname: "/success",
        });
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <>
      <SimpleHeader />
      <div className="content-container">
        <h1 className="title-pyramid">Pagamento</h1>
        <hr />
        <form onSubmit={(event) => handlePurchase(event)}>
          <input
            className="payment-types__input"
            type="radio"
            name="payment"
            id="creditCard"
            value="Cartão de Crédito"
            onChange={(e) => setPayment(e.target.value)}
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
            value="Boleto Bancário"
            onChange={(e) => setPayment(e.target.value)}
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
            value="Pix"
            onChange={(e) => setPayment(e.target.value)}
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
