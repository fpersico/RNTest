import { Container, Content, StyleProvider, Text } from 'native-base';
import getTheme from 'native-base/src/theme/components';
import material from 'native-base/src/theme/variables/material';
import React, { Component } from 'react';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <StyleProvider style={getTheme(material)}>
        <Container>
          <Content>
            <Text>I have changed the text color.</Text>
          </Content>
        </Container>
      </StyleProvider>
    );
  }
}
