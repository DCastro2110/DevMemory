import android from "../assets/svg/android.svg";
import caminhao from "../assets/svg/caminhao.svg";
import disney from "../assets/svg/disney.svg";
import estrela from "../assets/svg/estrela.svg";
import gasolina from "../assets/svg/gasolina.svg";
import moto from "../assets/svg/moto.svg";

type Items = {
  name: string;
  icon: string;
};

export const items: Items[] = [
  {
    name: "android",
    icon: android,
  },
  {
    name: "caminhao",
    icon: caminhao,
  },
  {
    name: "disney",
    icon: disney,
  },
  {
    name: "estrela",
    icon: estrela,
  },
  {
    name: "gasolina",
    icon: gasolina,
  },
  {
    name: "moto",
    icon: moto,
  },
];
