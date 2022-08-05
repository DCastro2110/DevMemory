import styled from "styled-components";

type ContainerProps = {
  shown: boolean;
};

export const Container = styled.div<ContainerProps>`
  max-width: 130px;
  height: 150px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => (props.shown ? "#0e64b2" : "#ccc")};
  cursor: pointer;
  transition: background-color 150ms ease-in-out;

  &:hover {
    background-color: ${(props) => (props.shown ? "" : "#aaa")};
  }

  img {
    width: 70px;
    opacity: ${(props) => (props.shown ? 1 : 0.3)};
  }
`;
