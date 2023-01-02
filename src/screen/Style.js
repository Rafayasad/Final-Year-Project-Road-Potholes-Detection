import { StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
    main_view: {
        backgroundColor: 'black',
        // flex:1
    },
    header: {
        backgroundColor: 'grey',
        height: windowHeight * 0.1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    header_text: {
        fontSize: 30
    },
    sub_header: {
        height: windowHeight * 0.05,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    sub_header_text: {
        fontSize: 20
    },
    graph_view: {
        height: windowHeight * 0.5,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: 'blue'
    },
    graph_view_1: {
        width: windowWidth * 0.8,
        height: windowHeight * 0.35,
        backgroundColor: 'white',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        // shadowOffset:{
        //     width:-6,
        //     height:-6
        // },
        // shadowOpacity:1,
        // shadowRadius:6,
        // shadowColor:"yellow"

},
graph_view_1_text:{
    fontSize: 15,
    color:'black'
},
// graph_view_2:{
//     width: windowWidth * 0.8,
//     height: windowHeight * 0.35,
//     backgroundColor: 'white',
//     // display: 'flex',
//     // justifyContent: 'space-between',
//     // alignItems: 'center',
//     shadowOffset:{
//         width:6,
//         height:6
//     },
//     shadowOpacity:1,
//     shadowRadius:6,
//     shadowColor:"yellow"
// },
    map_view: {
    backgroundColor: 'yellow',
    height: windowHeight * 0.3,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
},
    date_view: {
    backgroundColor: 'red',
    height: windowHeight * 0.05,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
},
    report_btn_view: {
    backgroundColor: 'purple',
    height: windowHeight * 0.05,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
}

})
export default styles