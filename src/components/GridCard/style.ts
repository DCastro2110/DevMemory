import styled from "styled-components";

type ContainerProps = {
  shown: boolean;
};

export const Container = styled.div<ContainerProps>`
  width: 100%;
  height: 100px;
  border-radius: 10px;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => (props.shown ? "#0e64b2" : "#222")};
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.7);
  transform: ${(props) => (props.shown ? "rotateY(180deg)" : "rotateY(0)")};
  cursor: pointer;
  transition: background-color 150ms ease-in-out, transform 400ms linear;

  &:hover {
    background-color: ${(props) => (props.shown ? "" : "#aaa")};
  }
  &:active {
    background-color: ${(props) => (props.shown ? "#0e64b2" : "#222")};
  }

  img {
    width: 50px;
    object-fit: cover;
    transform: ${(props) =>
      props.shown ? "rotateY(180deg)" : "rotateY(0), scale(2)"};
  }

  @media (max-width: 768px) {
    height: 80px;
  }
`;
