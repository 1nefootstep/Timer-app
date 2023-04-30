const timerConfigs = [
  {
    id: 1,
    label: "Von Leon B1",
    description: `Teleport Timers When the boss first spawns 10-18 seconds then every 1 min

Jail Timers First Jail in 3mins when it spawns then every 4 mins

Gargoyles Timers B1 Spawns them at the 50% HP then its every 2 mins 30 secs `,
    timers: [
      { duration: 60, title: "Teleport" },
      { duration: 240, title: "Jail" },
      { duration: 150, title: "Gargoyles" },
    ],
  },
  {
    id: 2,
    label: "Von Leon B2/B3",
    description: `Teleport Timers First Teleport 10-18 seconds then every 1min

Jail Timers First Jail is 3mins when it spawns then its every 4mins

Dispel Timers every 1 min

Gargoyles Timers First spawn 1 min 30 secs then every 2 mins 30 secs after that

Golems Timers spawn at 50% then every 2 mins
      `,
    timers: [
      { duration: 60, title: "Teleport", colorChangeThreshold: 10 },
      { duration: 240, title: "Jail" },
      { duration: 150, title: "Gargoyles" },
      { duration: 60, title: "Dispel", colorChangeThreshold: 10 },
      { duration: 120, title: "Golem" },
    ],
  },
];

export default timerConfigs;
