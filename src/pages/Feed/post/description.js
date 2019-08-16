import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class description extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const name = this.props.name;
        const description = this.props.description;
        return  <View style={styles.container}>
                    <Text style={styles.name}>{name}</Text>
                    <Text>{description}</Text>
                </View>;
    }
}
const styles =  StyleSheet.create({
    container : {
        paddingLeft : 10
    },
    name : {
        fontWeight : "bold",
        color : "#333"
    },
});
