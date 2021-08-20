import React from "react";
import "./Address.css";

import SimpleHeader from "../../components/Header/SimpleHeader";

const Address = () => {
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
          />
          <input
            className="input-pyramid"
            type="text"
            name="cep"
            id="cep"
            placeholder="CEP"
          />
          <input
            className="input-pyramid"
            type="text"
            name="state"
            id="state"
            placeholder="Estado"
          />
          <input
            className="input-pyramid"
            type="text"
            name="city"
            id="city"
            placeholder="Cidade"
          />
          <input
            className="input-pyramid"
            type="text"
            name="street"
            id="street"
            placeholder="Rua/Avenida"
          />
          <input
            className="input-pyramid"
            type="text"
            name="district"
            id="district"
            placeholder="Bairro"
          />
          <input
            className="input-pyramid"
            type="text"
            name="number"
            id="number"
            placeholder="Número"
          />
          <input
            className="input-pyramid"
            type="text"
            name="complement"
            id="complement"
            placeholder="Complemento"
          />
          <input
            className="input-pyramid"
            type="text"
            name="contact"
            id="contact"
            placeholder="Telefone"
          />

          <div className="step-button">
            <hr />
            <button className="button-pyramid" type="submit">
              Continuar
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Address;
