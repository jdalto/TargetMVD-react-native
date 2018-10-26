import { StyleSheet } from 'react-native';
import { redDefault, whiteBackground, white } from '../../../constants/styleConstants'

const styles = StyleSheet.create({
    inputArea: {
        width: 180,
        height: 37,
        borderStyle: 'solid',
        color: '#000000',
        textAlign: 'center',
        letterSpacing: 2.1,
        fontStyle: 'normal',
        fontSize: 10,
        fontWeight: '600',
        fontFamily: 'Open Sans',
        backgroundColor: white,
    },
    errorText: {
        color: redDefault,
        fontFamily: 'Open Sans',
        fontSize: 10.5,
        fontWeight: '600',
        fontStyle: 'normal',
        letterSpacing: 0,
    },
    container: { 
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default styles;