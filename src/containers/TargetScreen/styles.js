import { StyleSheet } from 'react-native';
import { white } from '../../constants/styleConstants';
import { getTopSpacing } from '../../utils/helpers';

const styles = StyleSheet.create({
  safeAreaTop: {
    flex: 1,
  },
  targetContainer: {
    backgroundColor: white,
    height: '100%',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: getTopSpacing()
  },
  mapContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default styles;
