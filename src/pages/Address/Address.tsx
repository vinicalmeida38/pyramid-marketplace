import "./Address.css";

import SimpleHeader from "../../components/Header/SimpleHeader";
import { useState } from "react";
import { Link } from "react-router-dom";

const Address = () => {
  const [name, setName] = useState("");
  const [CEP, setCEP] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [street, setStreet] = useState("");
  const [district, setDistrict] = useState("");
  const [number, setNumber] = useState("");
  const [complement, setComplement] = useState("");
  const [phone, setPhone] = useState("");

  const checkEmptyInputs =
    name === "" ||
    CEP === "" ||
    state === "" ||
    city === "" ||
    street === "" ||
    district === "" ||
    number === "" ||
    complement === "" ||
    phone === ""
      ? true
      : false;

  return (
    <>
      <SimpleHeader />
      <div className="content-container">
        <div>
          <h1 className="title-pyramid">Endereço</h1>
        </div>
        <hr />
        <form className="address-form">
          <input
            className="input-pyramid"
            type="text"
            name="name"
            id="name"
            placeholder="Nome completo"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            className="input-pyramid"
            type="text"
            name="cep"
            id="cep"
            placeholder="CEP"
            value={CEP}
            onChange={(e) => setCEP(e.target.value)}
          />
          <input
            className="input-pyramid"
            type="text"
            name="state"
            id="state"
            placeholder="Estado"
            value={state}
            onChange={(e) => setState(e.target.value)}
          />
          <input
            className="input-pyramid"
            type="text"
            name="city"
            id="city"
            placeholder="Cidade"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <input
            className="input-pyramid"
            type="text"
            name="street"
            id="street"
            placeholder="Rua/Avenida"
            value={street}
            onChange={(e) => setStreet(e.target.value)}
          />
          <input
            className="input-pyramid"
            type="text"
            name="district"
            id="district"
            placeholder="Bairro"
            value={district}
            onChange={(e) => setDistrict(e.target.value)}
          />
          <input
            className="input-pyramid"
            type="text"
            name="number"
            id="number"
            placeholder="Número"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          />
          <input
            className="input-pyramid"
            type="text"
            name="complement"
            id="complement"
            placeholder="Complemento"
            value={complement}
            onChange={(e) => setComplement(e.target.value)}
          />
          <input
            className="input-pyramid"
            type="text"
            name="contact"
            id="contact"
            placeholder="Telefone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />

          <div className="step-button">
            <hr />
            <Link
              to="/payment"
              className={checkEmptyInputs ? "disabled-link" : undefined}
            >
              <button
                className={
                  checkEmptyInputs
                    ? "button-pyramid disabled-button-pyramid"
                    : "button-pyramid"
                }
                type="submit"
              >
                Continuar
              </button>
            </Link>
          </div>
        </form>
      </div>
    </>
  );
};

export default Address;
