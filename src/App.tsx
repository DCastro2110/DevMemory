import { Button } from "./Button";

import * as S from "./App.style";

import Logo from "./assets/img/devmemory_logo.png";

const App = () => {
  return (
    <S.Container>
      <S.GameInfo>
        <S.LogoLink href="/">
          <img src={Logo} alt="Logo da DevMemory" />
        </S.LogoLink>

        <S.InfoArea>
          <S.Info>
            <span>Tempo</span>
            <strong>00:00</strong>
          </S.Info>

          <S.Info>
            <span>Movimentos</span>
            <strong>0</strong>
          </S.Info>
        </S.InfoArea>

        <Button label="Iniciar" color="#02d202" />
      </S.GameInfo>

      <S.GameArea></S.GameArea>
    </S.Container>
  );
};

export default App;
