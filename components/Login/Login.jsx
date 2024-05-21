
import { useState } from "react"
import "./login.css"

const Login = () => {

    const[username, setusername]= useState("");
    const[password, setpassword]= useState("");

    const handleSubmit = (event) =>{
        event.preventDefault()
        alert("Enviando os dados:" + username + "-"+ password )
    }

  return (
    <div>
      <div className="container">
        <form onSubmit={handleSubmit}>
            <h1>acesse o sistema</h1>
            <div className="input-field"> <input type="email" placeholder='E-mail' onChange={(e)=> setusername(e.target.value)}  /></div>
            <div className="input-field">
                <input type="password" placeholder='Senha' onChange={(e)=> setpassword(e.target.value)} />
            </div>

<div className="recall-forget">
    <label htmlFor="">
        <input type="checkbox"/>lembre de mim.
    </label>
    <a href="#">Esqueceu a senha?</a>
</div>

            <button>Entrar</button>

            <div className="signup-link">
            <p>Não tem uma conta?
                <a href="#">Registrar</a>
            </p>
            </div>
        </form>
      </div>
    </div>
  )
}

export default Login
