export const timerFormator = (sec: number) => {
  sec = sec * 1000;
  const time = new Date(sec);
  return time.toLocaleTimeString("pt-br", {
    second: "2-digit",
    minute: "2-digit",
  });
};
