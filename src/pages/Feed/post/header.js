import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Avatar from './avatar';

export default class header extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const author = this.props.author;
        return  <View style={styles.container}>
                    <Avatar avatar={author.avatar}/>
                    <Text style={styles.name}>{author.name}</Text>
                    <Text style={styles.options}>...</Text>
                </View>;
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        flexDirection: 'row', 
        alignItems : 'center',
        marginBottom:10
    },
    name : {
        flex: 4, 
        marginLeft:10
    },
    options : {
        flex : 1,
        fontWeight : 'bold',
        textAlign : "right",
        paddingRight : 10
    }
});
