


import React, {useState} from 'react'
import {Menu} from './Menu'

import logo from './logo.png';


export const Login = () => {

 
const [miLogin, setMiLogin] = useState("false");
const [usu, setUsu] = useState("");
const [pas, setPas] = useState("");

function iniciarSesion(e){
    e.preventDefault();
    var txtusu = document.getElementById("txtusu").value;
    var txtpas = document.getElementById("txtpas").value;

    if (txtusu.length===0 || txtpas.length===0){
        alert("complete los datos faltantes !!");
    }else{
        if(usu === "admin" && pas ==="123"){
            setMiLogin("true");
            document.getElementById("form_login").style.display = "none";
        }else{
        setMiLogin("false") ;
        alert("error de usuario y/o contraseña");
        document.getElementById("txtusu").value = "";
        document.getElementById("txtpas").value = "";
        document.getElementById("txtusu").focus();
        
        }
    }  
    }



  return (
    <div className="container"style={{ display: 'flex', justifyContent: 'center'}}> 
    <div className="contenedor" style={{ background: 'linear-gradient(to right, #5170FF, #F284E0)', marginTop: 20, padding: 20, width: "700px", textAlign:'center' }}>
    <img src={logo} alt="Logotipo" style={{ width: "80px" }} />
        
            <form id="form_login">
                <div>
                    <h1 style={{color:"#ff66c4", textalign:"center"}}>INICIAR SESION</h1>
                    <label htmlFor="txtusu"><strong>Username</strong></label>
                    <input type="text" id="txtusu" style={{textAlign:"center"}} className="form-control" onChange={(e)=>setUsu(e.target.value)} required/>
                </div>
                <div>
                    <label htmlFor="txtpas"><strong>Password</strong></label>
                    <input type="password" id="txtpas" style={{textAlign:"center"}} className="form-control" onChange={(e)=>setPas(e.target.value)}   required/>
                </div><br/>
                <input type="submit"  className="btn btn-primary" value="Login"  onClick={iniciarSesion}/>
            </form>
          
          { miLogin === "true" && <Menu usu={usu}/>}
        </div>
        </div>    
  )
}


