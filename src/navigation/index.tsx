import {StyleSheet, View} from 'react-native';
import {theme} from '../theme';
import Supplications from '../screens/Supplications';

const Navigation = () => {
  return (
    <View style={styles.container}>
      <Supplications />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.background.colors.offWhite,
    flex: 1,
  },
});

export default Navigation;
