import { StyleSheet } from 'react-native';
import { white, black } from '../../constants/styleConstants';
import { getTopSpacing } from '../../utils/helpers';

const styles = StyleSheet.create({
  targetContainer: {
    backgroundColor: white,
    height: '100%'
  },
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  mapContainer: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  map: {
    ...StyleSheet.absoluteFillObject
  },
  createTargetButtonContainer: {
    height: '13%',
    justifyContent: 'center',  
    alignItems: 'center',
    backgroundColor: white,
    marginBottom: '4%'    
  },
  targetForm: {
    height: '60%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: white
  },
  footer: {
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  createTargetText:{
    width: 200,
    height: 15,
    fontFamily: 'Open Sans',
    fontSize: 11,
    fontWeight: '600',
    fontStyle: 'normal',
    letterSpacing: 1.65,
    textAlign: 'center',
    color: black
   },
   targetIcon: {
    alignSelf: 'center',
    marginBottom: 12
   }
 });

export default styles;
