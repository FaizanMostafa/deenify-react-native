import {StyleSheet, SafeAreaView} from 'react-native';
import {theme} from '../theme';
import Supplications from '../screens/Supplications';

const Navigation = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Supplications />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.background.colors.offWhite,
    flex: 1,
  },
});

export default Navigation;
