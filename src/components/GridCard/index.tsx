import { GridItemType } from "../../types/GridItemType";

import * as S from "./style";

import dcLogo from "../../assets/svg/dc.svg";
import { MouseEventHandler, useEffect, useState } from "react";

type Props = {
  item: GridItemType;
  onClick: MouseEventHandler<HTMLDivElement>;
};

export const GridCard = ({ item, onClick }: Props) => {
  return (
    <S.Container className="card" shown={item.permanentShown || item.shown} onClick={onClick}>
      <img
        draggable={false}
        src={((item.shown || item.permanentShown) && item.icon) || dcLogo}
      />
    </S.Container>
  );
};
