import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {MainView} from './src/MainView';

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <MainView />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1},
});

export default App;
