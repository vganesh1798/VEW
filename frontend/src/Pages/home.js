import React from 'react';
import { Container, Header, Grid, Segment, Divider } from "semantic-ui-react";

export default class Home extends React.Component {
    render() {
        return (
            <Segment inverted>
                <Header as="h3">Welcome USER</Header>
                <Divider></Divider>
                <p>
                    Welcome to Smartify, the smart music database!
                    Please use the menu at the left to search for
                    artists, releases, songs, labels, or playlists 
                    using a variety of filters such as genre, hometown,
                    or even length!
                </p>
            </Segment>
        );
    }
}
