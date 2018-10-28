import React from 'react';
import {
    Container, Header, Content, CardItem, Card, Thumbnail, Image,
    Left, Button, Icon, Body, Title, Right, Text
} from 'native-base';
import {ScrollView, StyleSheet} from "react-native";
import {getStatusBarHeight} from "react-native-status-bar-height";
import {NavigationActions} from 'react-navigation';


export default class ConsoleCommands extends React.Component {


    render() {
        return (
            <Container>
                <Header style={styles.header}>
                    <Left>
                        <Button transparent onPress={() => this.props.navigation.dispatch(NavigationActions.back())}>
                            <Icon name='arrow-back'/>
                        </Button>
                    </Left>
                    <Body>
                    <Title>Console Commands</Title>
                    </Body>
                    <Right/>
                </Header>
                <Content>

                    <ScrollView
                        behaviour="height"
                        keyboardVerticalOffset={64}
                        style={{marginTop: '5%', flex: 1}}
                    >

                        <Card>
                            <CardItem header>
                                <Text>Caches</Text>
                            </CardItem>

                            <CardItem>
                                <Left>
                                    <Icon type={"FontAwesome"} active name="terminal"/>
                                    <Body>
                                    <Text>php bin/console cache:clear</Text>
                                    <Text note>Clear the cached information.</Text>
                                    </Body>
                                </Left>
                            </CardItem>

                            <CardItem>
                                <Left>
                                    <Icon type={"FontAwesome"} active name="terminal"/>
                                    <Body>
                                    <Text>php bin/console cache:warmup</Text>
                                    <Text note>Warms up an empty cache.</Text>
                                    </Body>
                                </Left>
                            </CardItem>
                        </Card>

                        <Card>
                            <CardItem header>
                                <Text>NativeBase</Text>
                            </CardItem>

                            <CardItem>
                                <Left>
                                    <Icon type={"FontAwesome"} active name="terminal"/>
                                    <Body>
                                    <Text>php bin/console cache:clear</Text>
                                    <Text note>Clear the cached information.</Text>
                                    </Body>
                                </Left>
                            </CardItem>

                            <CardItem>
                                <Left>
                                    <Icon type={"FontAwesome"} active name="terminal"/>
                                    <Body>
                                    <Text>php bin/console cache:warmup</Text>
                                    <Text note>Warms up an empty cache.</Text>
                                    </Body>
                                </Left>
                            </CardItem>
                        </Card>

                        <Card>
                            <CardItem header>
                                <Text>NativeBase</Text>
                            </CardItem>

                            <CardItem>
                                <Left>
                                    <Icon type={"FontAwesome"} active name="terminal"/>
                                    <Body>
                                    <Text>php bin/console cache:clear</Text>
                                    <Text note>Clear the cached information.</Text>
                                    </Body>
                                </Left>
                            </CardItem>

                            <CardItem>
                                <Left>
                                    <Icon type={"FontAwesome"} active name="terminal"/>
                                    <Body>
                                    <Text>php bin/console cache:warmup</Text>
                                    <Text note>Warms up an empty cache.</Text>
                                    </Body>
                                </Left>
                            </CardItem>
                        </Card>

                        <Card>
                            <CardItem header>
                                <Text>NativeBase</Text>
                            </CardItem>

                            <CardItem>
                                <Left>
                                    <Icon type={"FontAwesome"} active name="terminal"/>
                                    <Body>
                                    <Text>php bin/console cache:clear</Text>
                                    <Text note>Clear the cached information.</Text>
                                    </Body>
                                </Left>
                            </CardItem>

                            <CardItem>
                                <Left>
                                    <Icon type={"FontAwesome"} active name="terminal"/>
                                    <Body>
                                    <Text>php bin/console cache:warmup</Text>
                                    <Text note>Warms up an empty cache.</Text>
                                    </Body>
                                </Left>
                            </CardItem>
                        </Card>

                    </ScrollView>

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