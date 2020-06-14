import React from "react"
import { Link } from "gatsby"

import { SEO, Layout } from "../components"
import { FormSignIn } from '../styles/signin';
import ImageLogin from '../images/login.svg';

const LoginPage = () => (
  <Layout>
    <SEO title="login" />
    <FormSignIn>
      <h1>Bem vindo(a)</h1>
      <p>A plataforma criada para beneficio dos caminhoneiros.</p>
      <div>
        <img src={ImageLogin} />
      </div>
      <input type="number" name="phone" id="phone" placeholder="+55 99999-9999"/><br/>
      <button type="button">ENTRAR</button>
      <Link to="/signup">Primeira vez aqui?<span> Cadastre-se</span></Link>
    </FormSignIn>  
  </Layout>
)

export default LoginPage;
