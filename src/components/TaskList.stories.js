import { PureTaskList } from "./TaskList";
import * as TaskStories from "./Task.stories";

export default {
  component: PureTaskList,
  title: "PureTaskList",

  /**
   * `decorators` adalah sebuah cara untuk membungkus `stories` ke dalam
   * tempat/fungsi render lain.
   *
   * contoh di bawah ini akan memberikan `padding` sebesar 3rem di sekeliling
   * komponen yang di render. `decorators` juga bisa digunakan untuk membungkus
   * `stories` dengan komponen `Provider` dari React Context atau sejenisnya.
   */
  decorators: [(story) => <div style={{ padding: "3rem" }}>{story()}</div>],
};

const Template = (args) => <PureTaskList {...args} />;

export const Default = Template.bind({});
Default.args = {
  /**
   * Data di bawah ini dibentuk dengan mewarisi data `task` yang ada pada
   * komponen `Task` di kondisi `Default` pada file `Task.stories.js`
   */
  tasks: [
    { ...TaskStories.Default.args.task, id: "1", title: "Task 1" },
    { ...TaskStories.Default.args.task, id: "2", title: "Task 2" },
    { ...TaskStories.Default.args.task, id: "3", title: "Task 3" },
    { ...TaskStories.Default.args.task, id: "4", title: "Task 4" },
    { ...TaskStories.Default.args.task, id: "5", title: "Task 5" },
    { ...TaskStories.Default.args.task, id: "6", title: "Task 6" },
  ],
};

export const WithPinnedTasks = Template.bind({});
WithPinnedTasks.args = {
  tasks: [
    ...Default.args.tasks.slice(0, 5),
    { id: "6", title: "Task 6 (pinned)", state: "TASK_PINNED" },
  ],
};

export const Loading = Template.bind({});
Loading.args = {
  tasks: [],
  loading: true,
};

export const Empty = Template.bind({});
Empty.args = {
  ...Loading.args,
  loading: false,
};
