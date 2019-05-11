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

  solutions: [
    `A2`,
    `B4`,
    `C3`,
    `D1`,
  ],

  hints: [
    {
      content: `No one whose last name begins with "M" was involved in either nuclear power inspections or ${REDACTED}.`,
    },
    {
      content: `Anna and the person who inspected nuclear power plants both lived in Denver.`,
    },
    {
      content: `Andrew Martin was not looking into Freemasonry when he disappeared near Carbon River.`,
    },
    {
      content: `Plane tickets to Aruba were found at the home of the person who was looking into nuclear power inspections, but that person was not Owen Collins.`,
    },
    {
      content: `Anna Thomas received multiple restraining orders from Bellecom for repeatedly phoning call center staff.`,
    },
    {
      content: `Family and friends said Andrew Martin had developed an irrational fixation on Freemasonry leading up to his disappearance.`,
    },
  ],

  winCallback(grid) {
    console.log(grid);
    alert(`You're winner! 🏆`);
  },
});
