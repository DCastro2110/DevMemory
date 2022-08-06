import android from "../assets/svg/android.svg";
import caminhao from "../assets/svg/caminhao.svg";
import disney from "../assets/svg/disney.svg";
import estrela from "../assets/svg/estrela.svg";
import gasolina from "../assets/svg/gasolina.svg";
import moto from "../assets/svg/moto.svg";
import ok from "../assets/svg/ok.svg";
import casa from "../assets/svg/casa.svg";
import coracao from "../assets/svg/coracao.svg";
import pessoa from "../assets/svg/pessoa.svg";
import terminal from "../assets/svg/terminal.svg";
import microfone from "../assets/svg/microfone.svg";

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
  {
    name: "casa",
    icon: casa,
  },
  {
    name: "coracao",
    icon: coracao,
  },
  {
    name: "pessoa",
    icon: pessoa,
  },
  {
    name: "ok",
    icon: ok,
  },
  {
    name: "terminal",
    icon: terminal,
  },
  {
    name: "microfone",
    icon: microfone,
  },
];
