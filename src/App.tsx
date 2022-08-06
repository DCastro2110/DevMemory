import { ChangeEvent, useEffect, useState } from "react";

import { Button } from "./components/Button";
import { GridCard } from "./components/GridCard";

import * as S from "./App.style";

import Logo from "./assets/img/devmemory_logo.png";
import StartLogo from "./assets/svg/start.svg";
import RestartLogo from "./assets/svg/restart.svg";

import { items as cardItems, items } from "./data/items";

import { GridItemType } from "./types/GridItemType";

import { randomNum } from "./utils/randomNum";
import { timerFormator } from "./utils/timerFormator";

const App = () => {
  const [isStart, setIsStart] = useState<boolean>(false);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [timeElapsed, setTimeElapsed] = useState<number>(0);
  const [moveCount, setMoveCount] = useState<number>(0);
  const [shownCount, setShownCount] = useState<number>(0);
  const [gridItems, setGridItems] = useState<GridItemType[]>([]);
  const [hasAWinner, setHasAWinner] = useState<boolean>(false);
  const [alertMessage, setAlertMessage] = useState<string | number>(
    "Está pronto?"
  );
  const [cardsQuant, setCardsQuant] = useState<number>(12);

  let delayTurnCards = 5; // Delay para virar as cartas (em segundos)

  useEffect(() => {
    const timer = setInterval(() => {
      if (isPlaying) setTimeElapsed((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [isPlaying, timeElapsed]);

  // Verificar se os abertos são iguais
  useEffect(() => {
    if (shownCount === 2) {
      const turnedCards = gridItems.filter((item) => item.shown);
      if (turnedCards.length === 2) {
        // Se são iguais tornar permanente
        let tmpGrid = [...gridItems];

        if (turnedCards[0].icon === turnedCards[1].icon) {
          for (let i in tmpGrid) {
            if (tmpGrid[i].shown) {
              tmpGrid[i].permanentShown = true;
              tmpGrid[i].shown = false;
            }
          }
          setGridItems(tmpGrid);
          setShownCount(0);
          // Se não são iguais, fecha todos
        } else {
          for (let i in tmpGrid) {
            if (tmpGrid[i].shown) {
              setTimeout(() => {
                tmpGrid[i].shown = false;
                setGridItems(tmpGrid);
                setShownCount(0);
              }, 1000);
            }
          }
        }
      }

      setMoveCount(moveCount + 1);
    }
  }, [shownCount, gridItems]);

  // Verificar se há um vencedor
  useEffect(() => {
    if (moveCount >= items.length) {
      if (gridItems.every((item) => item.permanentShown)) {
        setIsPlaying(false);
        setHasAWinner(true);
      }
    }
  }, [moveCount]);

  // Muda a mensagem do alert
  useEffect(() => {
    if (hasAWinner) {
      setAlertMessage("Você ganhou!!!");
      return;
    }

    if (alertMessage === "Está pronto?") {
      setTimeout(() => {
        setAlertMessage(delayTurnCards);
      }, 1000);
      return;
    }

    const timer = setInterval(() => {
      if (typeof alertMessage === "number" && alertMessage > 1) {
        setAlertMessage(alertMessage - 1);
      } else {
        setAlertMessage("Em Jogo");
      }
    }, 1000);
    return () => clearInterval(timer);
  }, [alertMessage, hasAWinner]);

  // Setar o valor inicial da quantidade de cartas

  const handleStart = () => {
    setIsStart(true);
    createGrid();
  };

  const createGrid = () => {
    setAlertMessage("Está pronto?");
    let tmpGridItems: GridItemType[] = [];

    for (let i = 0; i < cardsQuant * 2; i++) {
      tmpGridItems.push({
        icon: null,
        shown: false,
        permanentShown: false,
      });
    }

    for (let i = 0; i < 2; i++) {
      for (let z = 0; z < cardsQuant; z++) {
        let pos;

        do {
          pos = randomNum(cardsQuant);
        } while (tmpGridItems[pos].icon !== null);

        tmpGridItems[pos].icon = cardItems[z].icon;
      }
    }
    setGridItems([...tmpGridItems]);

    setTimeout(() => {
      for (let i in tmpGridItems) {
        tmpGridItems[i].permanentShown = true;
      }
      setGridItems([...tmpGridItems]);

      setTimeout(() => {
        for (let i in tmpGridItems) {
          tmpGridItems[i].permanentShown = false;
          setIsPlaying(true);
        }
        setGridItems([...tmpGridItems]);
      }, delayTurnCards * 1000);
    }, 1000);
  };

  const handleTurnCard = (key: number) => {
    if (isPlaying && key !== null && shownCount < 2) {
      const tmpGrid = [...gridItems];

      if (!tmpGrid[key].permanentShown && !tmpGrid[key].shown) {
        tmpGrid[key].shown = true;
        setShownCount(shownCount + 1);
      }

      setGridItems(tmpGrid);
    }
  };

  const handleRestart = () => {
    setHasAWinner(false);
    setTimeElapsed(0);
    setMoveCount(0);
    setIsPlaying(false);
    setIsStart(false);
  };

  const handleSelectDifficult = (
    e: ChangeEvent<HTMLInputElement>,
    quant: number
  ) => {
    if (e.target.checked) {
      setCardsQuant(quant);
      return;
    }
  };

  return (
    <S.Container>
      <S.GameInfo>
        <S.LogoLink href="/">
          <img src={Logo} alt="Logo da DevMemory" />
        </S.LogoLink>

        <S.InfoArea>
          {isStart && (
            <>
              <S.Info>
                <span>Tempo</span>
                <strong>{timerFormator(timeElapsed)}</strong>
              </S.Info>

              <S.Info>
                <span>Movimentos</span>
                <strong>{moveCount}</strong>
              </S.Info>
            </>
          )}
          {!isStart && (
            <S.Fieldset>
              <legend>Selecione o nível de dificuldade:</legend>
              <div>
                <label>
                  Fácil
                  <input
                    type="radio"
                    name="difficult"
                    value="4"
                    onChange={(e) =>
                      handleSelectDifficult(e, Number(e.target.value))
                    }
                  />
                </label>
                <label>
                  Intermediário
                  <input
                    type="radio"
                    name="difficult"
                    value="6"
                    defaultChecked
                    onChange={(e) =>
                      handleSelectDifficult(e, Number(e.target.value))
                    }
                  />
                </label>
                <label>
                  Difícil
                  <input
                    type="radio"
                    name="difficult"
                    value="12"
                    onChange={(e) =>
                      handleSelectDifficult(e, Number(e.target.value))
                    }
                  />
                </label>
              </div>
            </S.Fieldset>
          )}
        </S.InfoArea>
        {!isStart && (
          <Button
            label="Iniciar"
            color="#02d202"
            src={StartLogo}
            onClick={handleStart}
          />
        )}

        {isStart && (
          <Button
            label="Reiniciar"
            color="#0e64b2"
            src={RestartLogo}
            onClick={handleRestart}
          />
        )}
      </S.GameInfo>

      <S.GameArea>
        {!isStart && (
          <S.StartAlert>Clique em iniciar para começar o jogo</S.StartAlert>
        )}

        {isStart && (
          <S.MainArea>
            <S.TextAlert>
              <span>{alertMessage}</span>
            </S.TextAlert>
            <S.GridArea cols={cardsQuant}>
              {gridItems.map((item, key) => (
                <GridCard
                  key={key}
                  item={item}
                  onClick={() => handleTurnCard(key)}
                />
              ))}
            </S.GridArea>
          </S.MainArea>
        )}
      </S.GameArea>
    </S.Container>
  );
};

export default App;
