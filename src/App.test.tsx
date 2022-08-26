import { render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import App from "./App";

it("should appear the start button when open the site", () => {
  const { container } = render(<App />);

  const startText = container
    .getElementsByTagName("button")[0]
    .getElementsByTagName("span")[0];

  expect(startText.innerHTML).toBe("Iniciar");
});

describe("testing when game start", () => {
  it("should appear text for user start the game", () => {
    render(<App />);

    expect(
      screen.getByText("Clique em iniciar para começar o jogo")
    ).toBeInTheDocument();
  });

  it("should start the game when player click in start button", () => {
    const { container } = render(<App />);

    act(() => {
      const startBtn = container.getElementsByTagName("button")[0];
      startBtn.click();
    });

    const cards = container.getElementsByClassName("card");
    expect(cards.length).toBeGreaterThan(0);
  });
});

describe("testing whether the number of cards is equivalent to the level chosen", () => {
  it("should appear 8 cards when level is easy", () => {
    const { container } = render(<App />);

    act(() => {
      const radio = container.getElementsByTagName("input")[0];
      const startBtn = container.getElementsByTagName("button")[0];

      radio.click();
      startBtn.click();
    });

    const cards = container.getElementsByClassName("card");
    expect(cards.length).toEqual(8);
  });

  it("should appear 12 cards when level is intermediary", () => {
    const { container } = render(<App />);

    act(() => {
      const radio = container.getElementsByTagName("input")[1];
      const startBtn = container.getElementsByTagName("button")[0];

      radio.click();
      startBtn.click();
    });

    const cards = container.getElementsByClassName("card");
    expect(cards.length).toEqual(12);
  });

  it("should appear 24 cards when level is hard", () => {
    const { container } = render(<App />);

    act(() => {
      const radio = container.getElementsByTagName("input")[2];
      const startBtn = container.getElementsByTagName("button")[0];

      radio.click();
      startBtn.click();
    });

    const cards = container.getElementsByClassName("card");
    expect(cards.length).toEqual(24);
  });
});

it("should back to home when restart button is clicked", () => {
  const { container } = render(<App />);

  act(() => {
    const startButton = container.getElementsByTagName("button")[0];
    startButton.click();
  });

  act(() => {
    const restarButton = container.getElementsByTagName("button")[0];
    restarButton.click();
  });

  const initialText = screen.getByText("Clique em iniciar para começar o jogo");

  expect(initialText).toBeInTheDocument();
});

export {};
