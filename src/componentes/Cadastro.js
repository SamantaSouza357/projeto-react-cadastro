import React,{useState} from 'react';
import Input from './Input';


const Cadastro = () => {
    const[nome,setNome] = useState("");
    const[email,setEmail] = useState("");
    const[confirmEmail,setConfirmEmail] = useState("");
    const[senha,setSenha] = useState("");
    const handleSubmit = e =>{
        e.preventDefault();
    };

    return (
     <div className="cadastro">
         <h1>Cadastre-se aqui</h1>
         <form onSubmit={handleSubmit}>
         <Input  value={nome}
            type="text"
            label="Nome"
            placeholder="Digite seu nome"
            atualizarState={setNome}
            obrigatorio
            />

         <Input value={email}
            type="email" 
            label="email"
            placeholder="Digite seu email"
            atualizarState={setEmail}
            />

         <Input value={confirmEmail}
             type="email"
             label="Confirma email" 
             placeholder="Confirme seu email" 
             atualizarState={setConfirmEmail}/>
         <Input value={senha}
             type="password"
             label="senha"
             placeholder="Digite sua senha"
             atualizarState={setSenha}/>
             <button>Cadastra</button>
         </form>

     </div>
    )
  }
  export default Cadastro;