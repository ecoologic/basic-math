import { createStore } from 'redux';

const reducer = (state, action) => {
  if (action.type === actions.timer.tick.type) {
    return { ...state, timer: {
        elapsedSeconds: state.timer.elapsedSeconds + action.payload.elapsedSeconds,
        remainingSeconds: state.timer.remainingSeconds - action.payload.elapsedSeconds
      }
    }
  } else if(action.type === actions.timer.set.type) {
    return { ...state, timer: {
        elapsedSeconds: 0,
        remainingSeconds: action.payload.remainingSeconds
      }
    }
  } else {
    return state
  }
}

const actions = {
  timer: {
    tick: { type: 'TIMER:TICK' },
    set: { type: 'TIMER:SET' }
  }
}

const store = createStore(
  reducer, {
    timer: {
      elapsedSeconds: 0,
      remainingSeconds: 0
    }
  }
);

export { reducer, actions, store }
