import React, { Component } from 'react';
import { StyleSheet } from "react-native";
import { View, Image, Dimensions} from 'react-native';


export default class Post extends Component {
    constructor(props) {
        super(props);
    }

    getPhotoSize = () => {
        const screenWidth = Dimensions.get('window').width; 
        const post = this.props.post; 
        return { 
            width: screenWidth,
            height:screenWidth/post.aspectRatio
        };
    }

    render() {
        const post = this.props.post;
        console.log(post);
        return <View>
                    <Image 
                        source={post.image} 
                        style={this.getPhotoSize()} 
                    />
                </View>;
    }
}