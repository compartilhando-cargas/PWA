import styled from 'styled-components';

export const LoginLayout = styled.div`
  margin: 10px auto;
  text-align: center;
  max-width: 320px;

  h1 {
    font-size: 30px;
    color: #128C7E;
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

  input[type=number] {  
    width: 90%;  
    border: 1px solid #25D366;
    padding: 15px;
    border-radius: 6px;
  }

  a {
    display: flex;
    justify-content: flex-end;
    padding: 10px;
    font-size: 14px;
    color: #999999;
    text-decoration: none;
    transition: 400ms;

    span {
      font-weight: 600;
      margin-left: 5px;
    }
  }

  a:hover {
    color: gray;
  }
  
`;
