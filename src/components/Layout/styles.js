import styled from "styled-components"

export const LayoutWrapper = styled.section`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: 1080px;
  min-height: calc(100vh - (80px + 2rem));
  padding: 1rem 1rem;
  margin-top: 80px;
`

export const LayoutContent = styled.main`
  flex-grow: 1;
`
