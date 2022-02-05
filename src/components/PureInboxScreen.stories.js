import { Provider } from "react-redux";
import { configureStore, createSlice } from "@reduxjs/toolkit";
import { PureInboxScreen } from "./InboxScreen";
import * as TaskListStories from "./TaskList.stories";

const MockStore = configureStore({
  reducer: {
    tasks: createSlice({
      name: "tasks",
      initialState: TaskListStories.Default.args.tasks,
      reducers: {
        updateTaskState: (state, action) => {
          const { id, newTaskState } = action.payload;
          const task = state.findIndex((task) => task.id === id);
          if (task >= 0) {
            state[task].state = newTaskState;
          }
        },
      },
    }).reducer,
  },
});

export default {
  component: PureInboxScreen,
  title: "PureInboxScreen",
  decorators: [(story) => <Provider store={MockStore}>{story()}</Provider>],
};

const Template = (args) => <PureInboxScreen {...args} />;

export const Default = Template.bind({});

export const Error = Template.bind({});
Error.args = {
  error: "Something went wrong",
};
