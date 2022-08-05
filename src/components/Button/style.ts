import styled from "styled-components";

type ButtonProps = {
  color: string;
};

export const Button = styled.button<ButtonProps>`
  background-color: ${(props) => props.color};
  border: none;
  height: 50px;
  width: 200px;
  border-radius: 10px;
  cursor: pointer;
  transition: opacity 300ms ease-in-out;
  display: flex;
  align-items: center;

  &:hover {
    opacity: 0.8;
  }
`;

export const IconArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-right: 1px solid rgba(255, 255, 255, 0.4);
  height: inherit;
  padding: 0 5px;

  img {
    width: 30px;
  }
`;

export const LabelArea = styled.div`
  flex: 1;
  color: #fff;
  font-size: 17px;
`;
