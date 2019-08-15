import React, { Component } from 'react';
import { View, Text } from 'react-native';
import globalStyle from '../../../globalStyle';

export default class header extends Component {
    render() {
        return  <>
                    <View style={[globalStyle.mt1,globalStyle.row]}>
                        <View style={[globalStyle.col]}>
                            <View style={[globalStyle.start]}>
                                <Text>image </Text>
                                <Text> name</Text>
                            </View>
                            <View style={[globalStyle.end]}>
                                <Text> opções </Text>
                            </View>
                        </View>
                    </View>
                </>;
      }
    }
