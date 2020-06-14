import React from "react"

import { FaArrowRight, FaChevronLeft } from "react-icons/fa"

import { SEO } from "../components"

import * as S from "../styles/signup"

const SignUpPage = () => (
  <>
    <SEO title="cadastro" />
    <S.BackScreen>
      <S.Linking to="/">
        <FaChevronLeft size={20} color="#128C7E" />
        <strong>Cadastro</strong>
        <div></div>
      </S.Linking>
    </S.BackScreen>

    <S.FormSignUp>
      <p>
        Para aproveitar dos beneficios do <span>Compartilhando Cargas</span>{" "}
        informe alguns dados:
      </p>
      <input type="text" name="name" id="name" placeholder="Nome" />
      <br />
      <input
        type="number"
        name="phone"
        id="phone"
        placeholder="+55 99999-9999"
      />
      <br />
      <S.ButtonLink>
        <span>Continuar</span>
        <div>
          <FaArrowRight size={15} color="#128C7E" />
        </div>
      </S.ButtonLink>
      <S.Linking to="/">
        ja possui cadastro?<span> Login</span>
      </S.Linking>
    </S.FormSignUp>
  </>
)

export default SignUpPage
