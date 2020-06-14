import styled from "styled-components"
import { FaWhatsapp } from "react-icons/fa"

export const TruckerWrapper = styled.article`
  margin: 0 1rem;
`
export const TruckerName = styled.h1`
  color: #222;
  margin-bottom: 0.5rem;
`

export const TruckerPhone = styled.h3`
  color: #666;
  margin-bottom: 1rem;
`

export const TruckerDescription = styled.p`
  color: #666;
  margin-bottom: 1rem;
`

export const PhoneLink = styled.a`
  text-decoration: none;
`

export const WhatsappIcon = styled(FaWhatsapp)`
  color: #075e54;
  width: 40px;
  height: 40px;
`
