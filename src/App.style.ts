import styled from "styled-components";

export const Container = styled.div`
  max-width: 800px;
  position: relative;
  margin: auto;
  display: flex;
  justify-content: space-between;
  padding: 50px 0 20px 0;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
  } ;
`;

export const GameInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: flex-start;

  @media (max-width: 768px) {
    align-items: center;
  }
`;

export const LogoLink = styled.a`
  display: block;
  cursor: pointer;

  img {
    width: 200px;
    height: 100px;
    object-fit: cover;
  }
`;

export const InfoArea = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: row;
    margin: auto;
  } ;
`;

export const Info = styled.div`
  span {
    display: block;
    font-size: 18px;
  }

  strong {
    display: block;
    margin-top: 10px;
    font-size: 30px;
    font-weight: bold;
    width: fit-content;
    border-radius: 10px;
    text-align: center;
  }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  } ;
`;

export const Fieldset = styled.fieldset`
  border: none;
  background-color: #0e64b2;
  border-radius: 10px;
  padding: 10px;

  label + div {
    margin-top: 10px;
  }
`;

export const GameArea = styled.div`
  max-width: 600px;
  width: 100%;
  flex: 1;
  justify-content: center;
  align-items: center;
  display: flex;
  height: inherit;
  padding: 0 10px;

  @media (max-width: 768px) {
    justify-content: center;
    margin: auto;
    margin-top: 40px;
  }
`;

export const StartAlert = styled.strong`
  font-size: 20px;
`;

export const MainArea = styled.div`
  flex: 1;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TextAlert = styled.div`
  width: 100%;
  height: 80px;
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  align-items: center;

  span {
    font-size: 30px;
    font-weight: bold;
  }

  @media (max-width: 768px) {
    height: fit-content;

    span {
      font-size: 24px;
    }
  }
`;

export const GridArea = styled.div<{ cols: number }>`
  justify-items: center;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(${(props) => props.cols / 2}, 1fr);
  gap: 10px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (max-width: 320px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;
