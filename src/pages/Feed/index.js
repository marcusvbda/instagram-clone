import React, { Component } from 'react';
import { View  } from 'react-native';
import Constants from '../../constants/index';
import Post from './post/index';
import { ScrollView } from 'react-native';

export default class Feed extends Component {
    constructor(props) {
        super(props);
        this.state = {posts : []};
        this.loadPage();
    }

    loadPage = async () => {
        let url = Constants.endpoint.feed;
        const response = await fetch(url);
        const data = await response.json();

        this.setState({posts:data});
    };

    render() {
        const feed = this.state.posts;
        return  <View>
                    <ScrollView>
                        { feed.map( item => {
                            return <Post key={item.id} post={item} />
                        }) }
                    </ScrollView>
                </View>;
    }
}
