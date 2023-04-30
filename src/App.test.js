import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";
import timerConfigs from "./timerConfigs";

jest.mock("./timerConfigs", () => [
  {
    label: "Test Configuration",
    id: 1,
    timers: [
      {
        duration: 60,
        title: "Test Timer 1",
        colorChangeThreshold: 10,
      },
      {
        duration: 120,
        title: "Test Timer 2",
      },
    ],
  },
  {
    label: "Test Configuration 2",
    id: 2,
    timers: [
      {
        duration: 66,
        title: "Test Timer 1",
        colorChangeThreshold: 10,
      },
      {
        duration: 123,
        title: "Test Timer 2",
      },
    ],
  },
]);

test("renders the first timer's title", () => {
  render(<App />);
  const firstTimerTitle = timerConfigs[0].timers[0].title;
  const timerTitleElement = screen.getByText(new RegExp(firstTimerTitle, "i"));
  expect(timerTitleElement).toBeInTheDocument();
});

test("switches configurations", () => {
  render(<App />);

  const configSelect = screen.getByTestId("config-select");

  // Select the second configuration
  fireEvent.change(configSelect, { target: { value: timerConfigs[1].id } });

  // Check if the second configuration is displayed
  timerConfigs[1].timers.forEach((timer) => {
    const timerTitleElement = screen.getByText(new RegExp(timer.title, "i"));
    expect(timerTitleElement).toBeInTheDocument();
  });
});

test("displays all timers for the active configuration", () => {
  render(<App />);

  const activeConfig = timerConfigs[0];

  // Check if all timers from the first configuration are displayed
  activeConfig.timers.forEach((timer) => {
    const timerTitleElement = screen.getByText(new RegExp(timer.title, "i"));
    expect(timerTitleElement).toBeInTheDocument();
  });
});
