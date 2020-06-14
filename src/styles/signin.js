import styled from "styled-components"
import { Link } from "gatsby"

export const FormSignIn = styled.form`
  margin: 30px auto;
  text-align: center;
  max-width: 320px;

  h1 {
    font-size: 30px;
    color: #128c7e;
  }

  p {
    font-size: 16px;
    color: #999999;
    padding: 15px;
    line-height: 24px;
  }

  div {
    margin: 40px auto;
  }

  img {
    width: 100%;
    margin: 0 auto;
  }

  input[type="number"] {
    width: 90%;
    border: 1px solid #25d366;
    padding: 15px;
    border-radius: 6px;
  }

  a {
    text-decoration: none;
  }
`
export const Linking = styled(Link)`
    display: flex;
    justify-content: flex-end;
    padding: 10px;
    font-size: 14px;
    color: #999999;
    transition: 400ms;

    span {
      font-weight: 600;
      margin-left: 5px;
    }

    &:hover {
      color: gray;
    }
  }
`

export const ButtonLink = styled(Link)`
  display: block !important;
  background: #128c7e;
  color: #ffffff;
  padding: 15px;
  border: 0;
  border-radius: 6px;
  margin-top: 20px;
  transition: 400ms;

  &:hover {
    background: #128c56;
  }
`
