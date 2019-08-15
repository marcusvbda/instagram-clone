import React, { Component } from 'react';
import { Image } from 'react-native';
import $ from '../../../utils/functions';

export default class photo extends Component {
    constructor(props) {
        super(props);
    }

    getPhotoSize = () => {
        const screenWidth = $.dimensions.getDimensions('window').width; 
        const ratio = this.props.ratio; 
        let sizes = { 
            width: screenWidth,
            height:screenWidth/ratio
        };
        return sizes;
    }

    render() {
        const image = this.props.image;
        return <Image
            source={{uri : image}}
            style={this.getPhotoSize()}
        />
    }
}
