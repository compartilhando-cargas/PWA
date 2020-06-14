import styled from "styled-components"

export const Cards = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
`

export const CardItem = styled.li`
  min-width: 320px;
  display: flex;
  padding: 1rem;
  @media (max-width: 768px) {
    width: 100%;
  }
  @media (max-width: 1024px) {
    width: 50%;
  }
  @media (min-width: 1080px) {
    width: 30%;
  }
`
export const Card = styled.div`
  background-color: white;
  border-radius: 0.25rem;
  box-shadow: 0px 10px 10px 0px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  overflow: hidden;
`
