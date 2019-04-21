export default Object.freeze({
  grid: {
    columns: [
      {
        label: 'Sherim Goan dies',
      },

      {
        label: 'Battle of Hastings',
      },

      {
        label: 'Glyndwr\'s defeat',
      },

      {
        label: 'Fall of Constantinople',
      }
    ],

    rows: [
      {
        label: 'comet',
      },

      {
        label: 'lunar eclipse',
      },

      {
        label: 'supernova',
      },

      {
        label: 'three suns in the sky',
      },
    ],
  },

  solutions: [
    'A3',
    'B1',
    'C4',
    'D2',
  ],

  winCallback(grid) {
    console.log(grid);
    alert('You\'re winner! 🏆');
  },
});
