import React, { Component } from 'react';
import { ScrollView, StyleSheet, } from 'react-native';

import MainHeader from '../MainHeader';
import BooksAvailableSection from './BooksAvailableSection';
import NotificationsSection from './NotificationsSection';
import NewsfeedSection from './NewsfeedSection';

export default class HomeScreen extends Component {
    render() {
        return (
            <ScrollView style={styles.container}>
                <MainHeader navigation={this.props.navigation} />

                <BooksAvailableSection />
                <NotificationsSection />
                <NewsfeedSection />

            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});