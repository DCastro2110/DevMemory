import styled from "styled-components";

type ButtonProps = {
  color: string;
};

export const Button = styled.button<ButtonProps>`
  background-color: ${(props) => props.color};
  border: none;
  height: 40px;
  border-radius: 10px;
  cursor: pointer;
  transition: opacity 300ms ease-in-out;

  &:hover {
    opacity: 0.8;
  }
`;

export const IconArea = styled.div``;

export const LabelArea = styled.div`
  color: #fff;
  font-size: 17px;
`;
