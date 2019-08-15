import { StyleSheet } from 'react-native';

export default  StyleSheet.create({
    row : {
        flex : 1,
        flexDirection: 'column'
    },
    col : {
        flex : 1,
        flexDirection: 'row',
        justifyContent : 'space-between'
    },
    start : {
        flex : 1,
        flexDirection: 'row',
        alignItems : "flex-start"
    },
    end : {
        flex : 1,
        flexDirection: 'column',
        alignItems : "flex-end"
    },
    mb1 : {
        marginBottom : 10
    },
    mb2 : {
        marginBottom : 20
    },
    mt1 : {
        marginTop : 10
    },
});
