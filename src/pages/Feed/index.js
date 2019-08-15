import React, { Component } from 'react';

import { View,Text } from 'react-native';
import env from '../../../env.json';
import Post from './post';

export default class Feed extends Component {
    constructor(props) {
        super(props);
        this.state = {posts : []};
        this.getFeed();
    }

    getFeed = async () => {
        const response = await fetch(env.get_posts_endpoint);
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