import styled from "styled-components";

export const Container = styled.div`
  max-width: 800px;
  margin: auto;
  display: flex;
  padding: 50px 0;
`;

export const GameInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const LogoLink = styled.a`
  display: block;
  cursor: pointer;

  img {
    width: 200px;
  }
`;

export const InfoArea = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Info = styled.div`
  span {
    display: block;
    font-size: 18px;
    color: #16213e;
  }

  strong {
    display: block;
    margin-top: 10px;
    font-size: 30px;
    font-weight: bold;
    color: #16213e;
    width: fit-content;
    border-radius: 10px;
    text-align: center;
  }
`;

export const GameArea = styled.div``;
