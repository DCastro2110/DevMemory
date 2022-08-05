import { GridItemType } from "../../types/GridItemType";

import * as S from "./style";

import b7Logo from "../../assets/svg/b7.svg";
import { MouseEventHandler, useEffect, useState } from "react";

type Props = {
  item: GridItemType;
  onClick: MouseEventHandler<HTMLDivElement>;
};

export const GridCard = ({ item, onClick }: Props) => {
  return (
    <S.Container shown={item.permanentShown || item.shown} onClick={onClick}>
      <img
        draggable={false}
        src={((item.shown || item.permanentShown) && item.icon) || b7Logo}
      />
    </S.Container>
  );
};
