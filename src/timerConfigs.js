const timerConfigs = [
  {
    id: 1,
    label: "Von Leon",
    description: `Teleport Timers First Teleport 10-18 seconds then every 1min

Jail Timers First Jail is 3mins when it spawns then its every 4mins

Dispel Timers every 1 min

Gargoyles Timers First spawn 1 min 30 secs then every 2 mins 30 secs after that

Golems Timers spawn at 50% then every 2 mins
      `,
    timers: [
      { duration: 60, title: "Teleport", colorChangeThreshold: 10 },
      { duration: 60, title: "Dispel", colorChangeThreshold: 10 },
      { duration: 240, title: "Jail" },
      { duration: 150, title: "Gargoyles" },
      { duration: 120, title: "Golem" },
      { isSeparator: true },
      { duration: 15, title: "First Teleport", colorChangeThreshold: 10 },
      { duration: 180, title: "First Jail" },
      { duration: 90, title: "First Gargoyles" },
    ],
  },
];

export default timerConfigs;
