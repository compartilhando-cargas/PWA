import React from "react"
import { Link } from "gatsby"

import { SEO, Layout } from "../components"
import { LoginLayout } from '../styles/login';
import ImageLogin from '../images/login.svg';

const IndexLogin = () => (
  <Layout>
    <SEO title="login" />
    <LoginLayout>
      <h1>Bem vindo(a)</h1>
      <p>A plataforma criada para beneficio dos caminhoneiros.</p>
      <div>
        <img src={ImageLogin} />
      </div>
      <input type="number" name="phone" id="phone" placeholder="+55 99999-9999"/><br/>
      <Link to="/using-typescript/">Primeira vez aqui?<span> Cadastre-se</span></Link>
    </LoginLayout>  
  </Layout>
)

export default IndexLogin
