import React, { Component } from 'react';
import { View  } from 'react-native';
import Constants from '../contantes';
import Post from './post';

export default class Feed extends Component {
    constructor(props) {
        super(props);
        this.state = {posts : []};
        this.getFeed();
        // console.log(Constants.endpoint.feed)
    }

    getFeed = async () => {
        const response = await fetch(Constants.endpoint.feed);
        const data = await response.json();
        this.setState({posts:data});
    };

    render() {
        const posts = this.state.posts;
        return <View>
            {posts.map((row) => {
                return <Post key={row.id} post={row} />;
            })}
        </View>;
    }
}