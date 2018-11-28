import { StyleSheet } from 'react-native';
import { black } from '../../../constants/styleConstants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
    width: '100%'
  },
  field: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '100%',
    flexDirection: 'row',
    borderBottomColor: black,
    borderBottomWidth: 1
  },
  topicIcon: {
    marginLeft: 60,
    width: '10%'
  },
  topicTitle: {
    width: '90%',
    height: 18,
    fontFamily: 'Open Sans',
    fontSize: 13,
    letterSpacing: 1.95,
    textAlign: 'left',
    color: black
  }
});

export default styles;
