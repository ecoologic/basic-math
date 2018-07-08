import { createStore } from 'redux';

// Write data
const reducer = (state, action) => {
  if (action.type === actions.timer.tick.type) {
    console.log('reducer - TICK', state, action)
    return { ...state, timer: {
        elapsedSeconds: state.timer.elapsedSeconds + 1,
        remainingSeconds: state.timer.remainingSeconds - 1
      }
    }
  } else if(action.type === actions.timer.set.type) {
    console.log('reducer - SET', state, action)
    return { ...state, timer: {
        elapsedSeconds: 0,
        remainingSeconds: action.payload.remainingSeconds
      }
    }
  } else {
    console.log('reducer - else', state, action)
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