import React from "react"
import { Link } from "gatsby"
import { FaArrowRight, FaChevronLeft } from 'react-icons/fa';

import { SEO, Layout } from "../components"
import { BackScreen, FormSignUp } from '../styles/signup';

const SignUpPage = () => (
  <Layout>
    <SEO title="cadastro" />    
    <BackScreen>
      <FaChevronLeft size={20} color="#128C7E" />
      <strong>Cadastro</strong>
      <div></div>
    </BackScreen>
    <FormSignUp>    
      <p>Para aproveitar dos beneficios do <span>Compartilhando Cargas</span> informe alguns dados:</p>
      <input type="text" name="name" id="name" placeholder="Nome"/><br/>
      <input type="number" name="phone" id="phone" placeholder="+55 99999-9999"/><br/>
      <button type="button">
        <span>Continuar</span>
        <div>
          <FaArrowRight size={15} color="#128C7E" />
        </div>         
      </button>
      <Link to="signin">ja possui cadastro?<span> Login</span></Link>
    </FormSignUp>  
  </Layout>
)

export default SignUpPage;
