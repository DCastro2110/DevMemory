import * as S from "./style";

type Props = {
  label: string;
  color: string;
  src?: string;
  onClick: () => void;
};

export const Button = ({ src, label, color, onClick }: Props) => {
  return (
    <S.Button color={color} onClick={onClick}>
      <S.IconArea>{src && <img src={src} alt="" />}</S.IconArea>
      <S.LabelArea>
        <span>{label}</span>
      </S.LabelArea>
    </S.Button>
  );
};
