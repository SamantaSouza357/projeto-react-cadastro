import React, { useState } from "react";
import {Link} from "react-router-dom";


import "./Navbar.scss";

const Navbar = () => {
  const [menuAtivo, setMenuAtivo] = useState(false);
  console.log(menuAtivo)
  const abrirMenu = () => {
    setMenuAtivo(!menuAtivo);
  };
  const fecharMenu = () =>{
    setMenuAtivo(false)
  }

  return (
    <div className="Navbar">
      <nav>
        <div onClick={abrirMenu} id="menu-hamburguer">
          <span className={menuAtivo ? "tiro1" : ""}></span>
          <span className={menuAtivo ? "tiro2" : ""}></span>
          <span className={menuAtivo ? "tiro3" : ""}></span>
        </div>
      </nav>
      <section className={`menu ${menuAtivo ? "ativo" : ""}`}>
        <Link onClick={fecharMenu} to="/" >Home</Link>
        <Link onClick={fecharMenu} to="Pagamento" >Pagamento</Link>
        <Link onClick={fecharMenu} to="Carrinho" >Carrinho</Link>
        <Link onClick={fecharMenu} to="Produtos" >Produtos</Link>
      </section>
  
    </div>
  );
};
export default Navbar;
