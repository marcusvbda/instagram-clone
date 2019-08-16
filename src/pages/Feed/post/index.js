import React, { Component } from 'react';
import Photo from "./photo";
import Description from "./description";
import Header from "./header";
import { View, StyleSheet } from 'react-native';

export default class Post extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const post = this.props.post;
        const author = post.author;
        return  <View style={styles.container}>
                    <Header author={author}/>
                    <Photo image={post.image} ratio={post.aspectRatio} />
                    <Description name={post.author.name} description={post.description} />
                </View>;
    }
}


const styles = StyleSheet.create({
    container : {
        marginVertical : 20
    }
})