import React from 'react';
import {Container, Header, Content, CardItem,Card, Thumbnail, Image,
    Left, Button, Icon, Body, Title, Right, Text} from 'native-base';
import {StyleSheet} from "react-native";
import {getStatusBarHeight} from "react-native-status-bar-height";
import {NavigationActions} from 'react-navigation';


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
                <Content>
                    <Card style={{flex: 0}}>
                        <CardItem>
                            <Left>
                                <Icon name={'terminal'}/>
                                <Body>
                                <Text>bin\console doctrine:schema:validate</Text>
                                <Text note>April 15, 2016</Text>
                                </Body>
                            </Left>
                        </CardItem>
                    </Card>
                    <Card style={{flex: 0}}>
                        <CardItem>
                            <Left>
                                <Icon name={'terminal'}/>
                                <Body>
                                <Text>bin\console doctrine:schema:validate</Text>
                                <Text note>April 15, 2016</Text>
                                </Body>
                            </Left>
                        </CardItem>
                    </Card>
                    <Card style={{flex: 0}}>
                        <CardItem>
                            <Left>
                                <Icon name={'terminal'}/>
                                <Body>
                                <Text>bin\console doctrine:schema:validate</Text>
                                <Text note>April 15, 2016</Text>
                                </Body>
                            </Left>
                        </CardItem>
                    </Card>
                    <Card style={{flex: 0}}>
                        <CardItem>
                            <Left>
                                <Icon name={'terminal'}/>
                                <Body>
                                <Text>bin\console doctrine:schema:validate</Text>
                                <Text note>April 15, 2016</Text>
                                </Body>
                            </Left>
                        </CardItem>
                    </Card>
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