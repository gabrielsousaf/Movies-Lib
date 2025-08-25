import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from { opacity: 0 }
  to { opacity: 1 }
`;

const spin = keyframes`
  to { transform: rotate(360deg) }
`;

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,.6);
  backdrop-filter: blur(6px) saturate(140%);
  -webkit-backdrop-filter: blur(6px) saturate(140%);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
  animation: ${fadeIn} .2s ease;
`;

const Spinner = styled.div`
  width: 64px;
  height: 64px;
  border-radius: 50%;
  border: 4px solid #ffffff33;
  border-top-color: #9d4edd;
  animation: ${spin} .9s linear infinite;
  box-shadow: 0 8px 24px rgba(0,0,0,.35);
`;

export const Loader = () => (
  <Overlay role="status" aria-live="polite" aria-label="Carregando">
    <Spinner />
  </Overlay>
);
