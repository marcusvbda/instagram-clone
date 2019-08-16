import React, { Component } from 'react';
import { Image, StyleSheet } from 'react-native';

export default class avatar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const avatar = this.props.avatar;
        return <Image style={styles.avatar} source={{uri:avatar}}></Image>;
    }
}

const styles =  StyleSheet.create({
    avatar : {
        width  : 32,
        height : 32,
        borderRadius : 16,
        marginLeft  : 10,
    },
});
