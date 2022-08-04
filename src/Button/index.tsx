import * as S from "./style";

type Props = {
  label: string;
  color: string;
  src?: string;
};

export const Button = ({ src, label, color }: Props) => {
  return (
    <S.Button color={color}>
      <S.IconArea>{src && <img src={src} alt="" />}</S.IconArea>
      <S.LabelArea><span>{label}</span></S.LabelArea>
    </S.Button>
  );
};
