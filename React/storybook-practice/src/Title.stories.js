import Title from './Title';

export default {
  title: "Practice/Title",
  component: Title,
  argTypes: {
    title: { control: "text" },
    textColor: {control: "text"}
  }
}

const Template = (args) => <Title {...args} />;

export const RedTitle = Template.bind({});

RedTitle.args = {
  title: "Red Title",
  textColor: "red"
}

// 스토리를 하나 더 만듭니다.
export const BlueTitle = Template.bind({});

// 스토리의 전달인자를 작성해줍니다.
BlueTitle.args= {
  title: "Blue Title",
  textColor: "blue"
}