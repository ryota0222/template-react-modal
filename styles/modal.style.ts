import styled from "styled-components";

export const ModalStyle = styled.div<{ width: string; height: string }>`
  position: relative;
  top: auto;
  left: auto;
  right: auto;
  bottom: auto;
  margin: 0 auto;
  border: 0;
  outline: 0;
  display: flex;
  flex-direction: column;
  background-color: transparent;
  transition-property: background-color;
  transition-duration: 500ms;
  transition-timing-function: ease-in-out;
  border-radius: 5px;
  background-color: white;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  max-height: 80%;
  overflow: scroll;
`;

export const OverlayStyle = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0);
  opacity: 0;
  transition-property: background-color, opacity;
  transition-duration: 500ms;
  transition-timing-function: ease-in-out;
  outline: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;

  background-color: rgba(0, 0, 0, 0);
  opacity: 0;
  &.overlay-after {
    background-color: rgba(0, 0, 0, 0.6);
    opacity: 1;
  }
  &.overlay-before {
    background-color: rgba(0, 0, 0, 0);
    opacity: 0;
  }
`;
