import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import { WebBrowser } from 'expo';
import { getLightEstimationEnabled } from 'expo/build/AR';
import { TextInput } from 'react-native-gesture-handler';

export default class home extends React.Component {
    static navigationOptions = {
      header: null,
    };

    render() {
        var looped = [];
        for(var i = 0 ; i < 5; i++){
            var a = <View key={i}><Text> "hahahahahahahahahah"</Text></View>;
            looped.push(a)
        };
      return(
          <View>
               <View style={style.statusBar}></View>
                <View style={style.container}>
                    <Text style={style.h1}>
                        {label.carnation}
                    </Text>
                    <ScrollView style={style.scroll}>
                            {looped}
                    </ScrollView>
                    <TextInput></TextInput>
                </View>
          </View>
      )
    }
}


const func = {
    looped : ()=>{
        var a = "hahahahahahahahahah \n";
        var b = '';
        for(var i = 0 ; i < 10; i++){
            a = a + a;
        };
        return a;
    }

}

const label = {
    test : "test",
    carnation : "Carnation App"
}
const style = StyleSheet.create({
    container: {
        // marginTop: 20,
        backgroundColor: "cornflowerblue",
        // borderColor: "white",
        textTransform: "capitalize",
        // borderWidth: 1
    },
    statusBar: {
        backgroundColor: "black",
        height: 25,
        borderBottomColor: "blue",
        borderBottomWidth: 2

    },
    h1: {
        fontSize: 25,
        borderBottomColor: "blue"
        // fontFamily: "fantasy"
    },
    scroll: {
        height: 200
    },
    break:{
        display: "flex"
    }

});