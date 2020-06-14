import styled from "styled-components"
import { Link } from "gatsby"

export const Cards = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(310px, 1fr));
  grid-gap: 1rem;
`

export const CardItem = styled.article`
  min-width: 310px;
  min-height: 310px;
  background-color: white;
  border-radius: 0.25rem;
  padding: 1rem;
  margin: 0 1rem;
  border: 1 solid rgba(0, 0, 0, 0.25);
  box-shadow: 0px 10px 10px 0px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  overflow: hidden;
`
export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`

export const CardLink = styled(Link)`
  text-decoration: none;
`

export const CardTitle = styled.h2`
  color: #222;
  margin-bottom: 1rem;
`

export const CardDate = styled.h4`
  color: #666;
`
