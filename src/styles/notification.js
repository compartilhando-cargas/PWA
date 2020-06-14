import styled from "styled-components"
import { Link } from "gatsby"

export const Title = styled.h1`
  margin: 0 20px;
  color: #46eb84;
  font-weight: bold;
`

export const NotificationLayoutLink = styled.div`
  // margin: 20px 0px 20px;
  display: flex;
  flex-wrap: wrap;
`

export const NotificationCard = styled(Link)`
  width: 300px;
  height: auto;
  background: #ffffff;
  border: 1px solid #46eb84;
  border-radius: 8px;
  padding: 10px;
  margin: 10px;
  text-decoration: none;

  display: flex;
  flex-direction: column;

  h4 {
    color: #747474;
    margin-bottom: 1rem;
  }

  p {
    width: 100%;
    margin-bottom: 1rem;
  }

  div svg {
    margin-right: 10px;
  }

  @media (max-width: 900px) {
    width: 100%;
  }
`
