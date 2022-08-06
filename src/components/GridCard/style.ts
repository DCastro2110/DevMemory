import styled from "styled-components";

type ContainerProps = {
  shown: boolean;
};

export const Container = styled.div<ContainerProps>`
  max-width: 130px;
  height: 100px;
  border-radius: 10px;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => (props.shown ? "#0e64b2" : "#ccc")};
  transform: ${(props) => (props.shown ? "rotateY(180deg)" : "rotateY(0)")};
  cursor: pointer;
  transition: background-color 150ms ease-in-out, transform 400ms linear;

  &:hover {
    background-color: ${(props) => (props.shown ? "" : "#aaa")};
  }

  img {
    width: 50px;
    opacity: ${(props) => (props.shown ? 1 : 0.3)};
    transform: ${(props) => (props.shown ? "rotateY(180deg)" : "rotateY(0)")};
  }
`;
