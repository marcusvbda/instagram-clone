import React, { Component } from 'react';
import { View  } from 'react-native';
import Constants from '../../constants/index';
import Post from './post/index';
import { ScrollView } from 'react-native';

export default class Feed extends Component {
    constructor(props) {
        super(props);
        this.state = {posts : []};
        this.getFeed();
    }

    getFeed = async () => {
        const response = await fetch(Constants.endpoint.feed);
        const data = await response.json();

        this.setState({posts:data});
    };

    render() {
        const posts = this.state.posts;
        return  <View>
                    <ScrollView>
                        {posts.map((row) => {
                            return <Post key={row.id} post={row} />;
                        })}
                    </ScrollView>
                </View>;
    }
}