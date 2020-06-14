import styled from "styled-components"

export const LayoutWrapper = styled.section`
  display: flex;
  flex-direction: column;
  border-radius: 0.25rem;
  margin: 0 auto;
  max-width: 1080px;
  min-height: calc(100vh - (80px));
  margin-top: 80px;
  background: #ffffff;
`

export const LayoutContent = styled.main`
  flex-grow: 1;
  margin: 1rem 0;
`

export const LayoutFooter = styled.footer`
  padding: 1rem 2rem;
`
