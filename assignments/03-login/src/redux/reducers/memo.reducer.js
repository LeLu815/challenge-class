import { v4 as uuidv4 } from "uuid";

export const add_action = "memo/ADD";
export const delete_action = "memo/DELETE";
export const update_action = "memo/UPDATE";

const initialState = {
  latestId: uuidv4(),
  memoList: [{}],
};

function memoReducer(prevState = initalState, action) {
  switch (action.type) {
    case add_action:
      return;

    case delete_action:
      return;

    case update_action:
      return;
  }
}

export default memoReducer;
