import { ChangeEvent } from "react";
import * as S from "./style";

type Props = {
  children: string;
  isDefaultChecked: boolean;
  dataKey: string;
  value: string;
  changeFunc: (e: ChangeEvent<HTMLInputElement>, quant: number) => void;
};

export const RadioInput = ({
  children,
  isDefaultChecked,
  dataKey,
  value,
  changeFunc,
}: Props) => {
  return (
    <S.Radio>
      {children}
      <input
        type="radio"
        name="difficult"
        defaultChecked={isDefaultChecked}
        data-key={dataKey}
        value={value}
        onChange={(e) => changeFunc(e, Number(e.target.value))}
      />
    </S.Radio>
  );
};
