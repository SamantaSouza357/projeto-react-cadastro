import {BrowserRouter, Route} from 'react-router-dom';
import React from 'react';
import Navbar from './componentes/Navbar';
import Carrinho from './componentes/Carrinho';
import Pagamento from './componentes/Pagamento';
import Produtos from './componentes/Produtos';
import Home from './componentes/Home';
import Cadastro from './componentes/Cadastro';



const App = () => {
  return (
   
   <BrowserRouter>
    <Navbar/>
    <Route exact path="/" component={Home}/>
    <Route exact path="/Cadastro" component={Cadastro}/>
    <Route path="/Pagamento" component={Pagamento}/>
    <Route path="/Produtos" component={Produtos} />
    <Route path="/Carrinho" component={Carrinho}/>

   </BrowserRouter>
  )
}
export default App;