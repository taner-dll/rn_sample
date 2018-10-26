import React from 'react';
import {Container, Header, Content, Accordion, Left, Button, Icon, Body, Title, Right} from 'native-base';
import {StyleSheet} from "react-native";
import {getStatusBarHeight} from "react-native-status-bar-height";
import {NavigationActions} from 'react-navigation';


const dataArray = [
    {title: "First Element", content: "Lorem ipsum dolor sit amet"},
    {title: "Second Element", content: "Lorem ipsum dolor sit amet"},
    {title: "Third Element", content: "Lorem ipsum dolor sit amet"}
];

export default class ConsoleCommands extends React.Component {
    render() {
        return (
            <Container>
                <Header style={styles.header}>
                    <Left>
                        <Button transparent onPress={()=> this.props.navigation.dispatch(NavigationActions.back())}>
                            <Icon name='arrow-back' />
                        </Button>
                    </Left>
                    <Body>
                    <Title>Console Commands</Title>
                    </Body>
                    <Right/>
                </Header>
                <Content padder>
                    <Accordion dataArray={dataArray} expanded={0}/>
                </Content>
            </Container>
        );
    }
}

const styles = StyleSheet.create({

    header: {
        paddingTop: getStatusBarHeight(),
        height: 54 + getStatusBarHeight(),
    },
    content: {
        backgroundColor: '#FFFFFF'
    }
});