export const add_action = "memo/ADD";
export const delete_action = "memo/DELETE";
export const update_action = "memo/UPDATE";

const initialState = [];

function memoReducer(prevState = initialState, action) {
  switch (action.type) {
    case add_action:
      return [
        ...prevState,
        {
          id: action.payload.id,
          createdAt: Date.now(),
          content: action.payload.content,
        },
      ];

    case update_action:
      return prevState.map((memo) => {
        if (memo.id === action.payload.id) {
          return {
            ...memo,
            content: action.payload.content,
          };
        } else {
          return memo;
        }
      });

    case delete_action:
      return prevState.filter((memo) => memo.id !== action.payload);

    default:
      return prevState;
  }
}

export default memoReducer;
