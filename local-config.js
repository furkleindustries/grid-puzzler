const REDACTED = `[REDACTED]`;

export default Object.freeze({
  grid: {
    columns: [
      {
        label: `Andrew Martin`,
      },

      {
        label: `Anna Thomas`,
      },

      {
        label: `William Morgan`,
      },

      {
        label: `Owen Collins`,
      }
    ],

    rows: [
      {
        label: `mass wiretapping`,
      },

      {
        label: `Freemasonry`,
      },

      {
        label: `${REDACTED}`,
      },

      {
        label: `nuclear power inspections`,
      },
    ],
  },

  /**
   * When you use numbers here, they are used as 1-indexed,
   * (1 as first element of a list), but are coerced to 0-indexed numbers at
   * runtime. No changes are made to strings.
   */
  solutions: [
    2,
    4,
    5,
    6,
  ],

  greenOnWin: [
    `D3`,
    `C4`,
  ],

  redOnWin: [
    `C3`,
  ],

  hints: [
    {
      content: `No one whose last name begins with "M" was involved in either nuclear power inspections or ${REDACTED}.`,
      green: [],
      red: [
        `A3`,
        `A4`,
        `C3`,
        `C4`,
      ],
    },

    {
      content: `Anna and the person who inspected nuclear power plants both lived in Denver.`,
      green: [],
      red: [
        `B4`,
      ],
    },

    {
      content: `Andrew Martin was not looking into Freemasonry when he disappeared near Carbon River.`,
      green: [],
      red: [
        `A2`,
      ],
    },

    {
      content: `Plane tickets to Aruba were found at the home of the person who was looking into nuclear power inspections, but that person was not Owen Collins.`,
      green: [],
      red: [
        `D4`,
      ],
    },

    {
      content: `Anna Thomas received multiple restraining orders from Bellecom for repeatedly phoning call center staff.`,
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
      content: `Family and friends said Andrew Martin had developed an irrational fixation on Freemasonry leading up to his disappearance.`,
      green: [
        `A2`,
      ],

      red: [
        `A1`,
        `A3`,
        `A4`,
        `B2`,
        `C2`,
        `D2`,
      ],
    },
  ],

  winCallback(grid) {
    console.log(grid);
    console.log(`You're winner! 🏆`);
  },
});
