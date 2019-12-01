import React from 'react';
import { StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
const MyButton = () => <Button style={styles.button} title={'Clicka ae'} />;

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'red',
  },
});

export default MyButton;
