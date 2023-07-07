import { DECREMENT, INCREMENT } from '../constants'
const initialState = {
    counter: 0
}
export default function countstate(state = 0, action) {
    switch (action.type) {
        case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    default:
      return state;
    }


}
