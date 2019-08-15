import React, { Component } from 'react';
import Photo from "./photo";
import Header from "./header";
import { View } from 'react-native';
import globalStyle from '../../../globalStyle';

export default class Post extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const post = this.props.post;
        return <>
            <View style={[globalStyle.row,globalStyle.mb1]}>
                <Header/>
            </View>
            <View style={[globalStyle.row,globalStyle.mb2]}>
                <Photo image={post.image} ratio={post.aspectRatio} />
            </View>
        </>;
    }
}

