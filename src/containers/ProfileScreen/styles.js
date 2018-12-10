import { StyleSheet } from 'react-native';
import { white, black } from '../../constants/styleConstants';
import { getTopSpacing } from '../../utils/helpers';

const styles = StyleSheet.create({
  safeAreaTop: {
    flex: 1
  },
  profileContainer: {
    backgroundColor: white,
    height: '100%'
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start'
  },
  formContainer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default styles;
