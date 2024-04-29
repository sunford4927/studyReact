const INCREMENT = 'counter/INCREMENT';
const DECREMENT = 'counter/DECREMENT';

// 액션 생성함수
export const counterActions = {
    increment: (diff: number) => ({ type: INCREMENT, payload: diff }),
    decrement: (diff: number) => ({ type: DECREMENT, payload: diff }),
  };
  
  // 액션 객체의 타입
  type IncrementAction = ReturnType<typeof counterActions.increment>;
  type DecrementAction = ReturnType<typeof counterActions.decrement>;
export  type Actions = IncrementAction | DecrementAction;

export type CounterState = Readonly<{
    value : number;
}>;

const initialState : CounterState = {
    value : 0,
};

export default function addsubReducer(state: CounterState = initialState, action: Actions) 
{
    switch(action.type)
    {
        case INCREMENT : {
            return {
                ...state,
                value : state.value + (action as IncrementAction).payload,
            };
        }

        case DECREMENT : {
            return {
                ...state,
                value : state.value - (action as DecrementAction).payload,
            };
        }

        default:
            return state
    }
}