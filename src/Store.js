const InitialState = {
  PlayerName1: 'dsmsnds',
  PlayerName2: 'dksjd',
  Player1wongame: 0,
  Player2wongame: 0,
};

function PlayerStore(state = InitialState, action) {
  switch (action.type) {
    case 'Pingpong':
      return {...state, ...action.payload};
    default:
      return {...state};
  }
}

export {InitialState, PlayerStore};
