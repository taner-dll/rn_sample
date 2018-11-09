import React from 'react';
import {Text, ScrollView} from 'react-native';
import {
    Container, Content, Body, Title, Header, Left, Right, Thumbnail,
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

import styles from "../style";
import symfonyLogo from "../../../assets/symfony.png";
import doctrineLogo from "../../../assets/doctrine.png";

export default class HomeScreen extends React.Component {

    render() {
        return (
            <StyleProvider style={getTheme(material)}>
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

                        <ScrollView
                            behaviour="height"
                            keyboardVerticalOffset={64}
                            style={{marginTop: '5%', flex: 1}}
                        >

                            <Card>
                                <CardItem bordered button
                                          onPress={() => this.props.navigation.navigate('GeneralCommands')}>
                                    <Left>
                                        <Thumbnail square small source={symfonyLogo} />
                                        <Text style={{paddingLeft: 10}}>General Commands
                                            <Text style={{color: 'grey', fontStyle: 'italic'}} note>{"\n"}
                                                most used by community
                                            </Text>
                                        </Text>
                                    </Left>

                                    <Right>
                                        <Icon name="ios-arrow-forward" />
                                    </Right>
                                </CardItem>

                                <CardItem bordered button
                                          onPress={() => this.props.navigation.navigate('MakeCommands')}>
                                    <Left>
                                        <Thumbnail square small source={symfonyLogo} />
                                        <Text style={{paddingLeft: 10}}>The Symfony MakerBundle
                                            <Text style={{color: 'grey', fontStyle: 'italic'}} note>{"\n"}
                                                create controllers and more
                                            </Text>
                                        </Text>
                                    </Left>
                                    <Right>
                                        <Icon name="ios-arrow-forward"/>
                                    </Right>
                                </CardItem>
                            </Card>

                            <Card>
                                <CardItem bordered button
                                          onPress={() => this.props.navigation.navigate('CacheCommands')}>
                                    <Left>
                                        <Thumbnail square small source={doctrineLogo} />
                                        <Text style={{paddingLeft: 10}}>Doctrine Cache Commands</Text>
                                    </Left>
                                    <Right>
                                        <Icon name="ios-arrow-forward"/>
                                    </Right>
                                </CardItem>

                                <CardItem bordered button
                                          onPress={() => this.props.navigation.navigate('DoctrineCommands')}>
                                    <Left>
                                        <Thumbnail square small source={doctrineLogo} />
                                        <Text style={{paddingLeft: 10}}>General Doctrine Commands</Text>
                                    </Left>
                                    <Right>
                                        <Icon name="ios-arrow-forward"/>
                                    </Right>
                                </CardItem>

                                <CardItem bordered button
                                          onPress={() => this.props.navigation.navigate('DoctrineCommands')}>
                                    <Left>
                                        <Thumbnail square small source={doctrineLogo} />
                                        <Text style={{paddingLeft: 10}}>ORM Annotations</Text>
                                    </Left>
                                    <Right>
                                        <Icon name="ios-arrow-forward"/>
                                    </Right>
                                </CardItem>
                            </Card>

                            <Card>
                                <CardItem bordered>
                                    <Left>
                                        <Text>Create Command</Text>
                                    </Left>

                                    <Right>
                                        <Icon name="ios-arrow-forward"/>
                                    </Right>
                                </CardItem>
                            </Card>

                        </ScrollView>

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