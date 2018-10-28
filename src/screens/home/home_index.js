import React from 'react';
import {StyleSheet, Text, ScrollView} from 'react-native';
import {
    Container, Content, Body, Title, Header, Left, Right,
    Icon, Button, FooterTab, Footer, StyleProvider, Card, CardItem
} from 'native-base';
import {getStatusBarHeight} from 'react-native-status-bar-height';


/**
 * NativeBase, 3 farklı tema var 1:material 2:platform 3:commonColor
 *
 * THEME EJECT işleminden sonra /native-base-theme dizini oluşturuldu
 * bu sayede 3 farklı temayı istediğimiz gibi değiştirebiliriz.
 *
 * theme eject komutu:
 * node node_modules/native-base/ejectTheme.js
 *
 * Temayı uygulayabilmek için Container, StyleProvider içerisine alınmalı
 * ve <StyleProvider style={getTheme(material)}> şeklinde kullanılmalıdır.
 *
 */
import getTheme from "../../../native-base-theme/components/index";
import material from "../../../native-base-theme/variables/material";
import commonColor from "../../../native-base-theme/variables/commonColor";
import platform from "../../../native-base-theme/variables/platform";

class HomeScreen extends React.Component {



    render() {
        return (
            <StyleProvider style={getTheme(platform)}>
                <Container>
                    <Header style={styles.header}>
                        <Left>
                            <Button transparent>
                                <Icon name="menu" onPress={() => this.props.navigation.openDrawer()}/>
                            </Button>
                        </Left>
                        <Body>
                        <Title>Symfony 4</Title>
                        </Body>
                        <Right/>
                    </Header>
                    <Content style={styles.content}>
                        <Card>
                            <ScrollView
                                behaviour="height"
                                keyboardVerticalOffset={64}
                                style={{marginTop: '5%', flex: 1}}
                            >

                                <CardItem bordered button
                                          onPress={() => this.props.navigation.navigate('ConsoleCommands')}>
                                    <Left>
                                        <Text>Console Commands</Text>
                                    </Left>
                                    <Right>
                                        <Icon name="ios-arrow-forward"/>
                                    </Right>
                                </CardItem>
                                <CardItem bordered>
                                    <Left>
                                        <Text>Make Commands</Text>
                                    </Left>
                                    <Right>
                                        <Icon name="ios-arrow-forward"/>
                                    </Right>
                                </CardItem>
                                <CardItem bordered>
                                    <Left>
                                        <Text>Doctrine Commands</Text>
                                    </Left>

                                    <Right>
                                        <Icon name="ios-arrow-forward"/>
                                    </Right>
                                </CardItem>
                                <CardItem bordered>
                                    <Left>
                                        <Text>ORM Annotations</Text>
                                    </Left>

                                    <Right>
                                        <Icon name="ios-arrow-forward"/>
                                    </Right>
                                </CardItem>
                                <CardItem bordered>
                                    <Left>
                                        <Text>Create Command</Text>
                                    </Left>

                                    <Right>
                                        <Icon name="ios-arrow-forward"/>
                                    </Right>
                                </CardItem>
                            </ScrollView>
                        </Card>
                    </Content>

                    {/*
                    <Footer>
                        <FooterTab>
                            <Button full>
                                <Text>Footer</Text>
                            </Button>
                        </FooterTab>

                    </Footer>
                    */}
                </Container>
            </StyleProvider>
        );
    }
}

export default HomeScreen;


const styles = StyleSheet.create({

    header: {
        paddingTop: getStatusBarHeight(),
        height: 54 + getStatusBarHeight(),
    },
    content: {
        backgroundColor: '#FFFFFF'
    }
});

