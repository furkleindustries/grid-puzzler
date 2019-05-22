const REDACTED = `[REDACTED]`;

export default Object.freeze({
  grid: {
    columns: [
      {
        label: `Emperor Constantine X dies`,
      },

      {
        label: `Battle of Hastings`,
      },

      {
        label: `Glyndwr's defeat`,
      },

      {
        label: `Fall of Constantinople`,
      }
    ],

    rows: [
      {
        label: `comet`,
      },

      {
        label: `lunar eclipse`,
      },

      {
        label: `supernova`,
      },

      {
        label: `three suns in the sky`,
      },
    ],
  },

  /**
   * When you use numbers here, they are used as 1-indexed,
   * (1 as first element of a list), but are coerced to 0-indexed numbers at
   * runtime. No changes are made to strings.
   */
  solutions: [
    1,
    2,
    3,
    4,
  ],

  greenOnWin: [
    `A3`,
    `C4`,
    `D2`,
  ],

  redOnWin: [
    `A2`,
    `A4`,
    `D4`,
  ],

  hints: [
    {
      content: `Glyndwr's defeat was not marked by a comet.`,
      green: [],
      red: [
        `C1`,
      ],
    },

    {
      content: `The supernova occurred during either the Battle of Hastings or the fall of a city.`,
      green: [],
      red: [
        `C3`,
        `D3`,
      ],
    },

    {
      content: `The lunar eclipse did not occur during Glyndwr's defeat.`,
      green: [],
      red: [
        `C2`,
      ],
    },

    {
      content: `The Battle of Hastings was marked by a comet.`,
      green: [
        `B1`,
      ],
      red: [
        `A1`,
        `B2`,
        `B3`,
        `B4`,
        `C1`,
        `D1`,
      ],
    },

    {
      content: `The passing of Halley's comet has marked every fall of a European empire.`,
      green: [
        `D1`,
      ],

      red: [
        `A1`,
        `B1`,
        `C1`,
        `D2`,
        `D3`,
        `D4`,
      ],
    },

    {
      content: `Constantine IX died in the year three suns appeared in the sky.`,
      green: [
        `A4`,
      ],

      red: [
        `A1`,
        `A2`,
        `A3`,
        `B4`,
        `C4`,
        `D4`,
      ],
    },
  ],

  winCallback(grid) {
    console.log(grid);
    console.log(`You're winner! 🏆`);
  },
});
