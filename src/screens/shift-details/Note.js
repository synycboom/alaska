import React from 'react';
import { Content, Form, Textarea, Text } from 'native-base';

class Note extends React.PureComponent {
  render() {
    const {
      value,
      onChange
    } = this.props;

    return (
      <Content padder>
        <Form>
          <Text>Personal Note</Text>
          <Textarea
            value={value}
            onChangeText={onChange}
            rowSpan={13}
            bordered
            placeholder='Tab to edit'
          />
        </Form>
      </Content>
    );
  }
}

export default Note;