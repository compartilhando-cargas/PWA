import styled from "styled-components"
import { Link } from "gatsby"
import { FaWhatsapp } from "react-icons/fa"

export const TruckerList = styled.section`
  display: flex;
  flex-direction: column;
`

export const ListItem = styled.article`
  min-width: 310px;
  background-color: #eee;
  border-radius: 0.25rem;
  margin: 0.5rem 0.5rem;
  padding: 0.5rem;
  box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.25);
  overflow: hidden;
`
export const Item = styled.div`
  display: flex;
  align-items: center;
  padding: 30px;
`
export const ItemImage = styled.img`
  height: 40px;
  width: auto;
  margin-right: 0.5rem;
`
export const ItemName = styled.h2`
  font-size: 1.25em;
  color: #222;
  flex: 1;
  margin-right: 0.5rem;
`
export const ItemDescription = styled.h3`
  font-size: 14px;
  color: #444;
  flex: 2;
  margin-right: 0.5rem;
`

export const ProfileLink = styled(Link)`
  text-decoration: none;
  flex: 1;
`
export const PhoneLink = styled.a`
  text-decoration: none;
  flex: 1;
`
export const WhatsappIcon = styled(FaWhatsapp)`
  color: #075e54;
  width: 40px;
  height: 40px;
`
