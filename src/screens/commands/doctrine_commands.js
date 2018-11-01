import React from 'react';
import {
    Container, Header, Content, CardItem, Card,
    Left, Button, Icon, Body, Title, Right, Text
} from 'native-base';
import {ScrollView} from "react-native";
import {NavigationActions} from 'react-navigation';
import styles from '../style';


export default class DoctrineCommands extends React.Component {


    render() {
        return (
            <Container>
                <Header style={styles.header}>
                    <Left>
                        <Button transparent onPress={() => this.props.navigation.dispatch(NavigationActions.back())}>
                            <Icon name='arrow-back'/>
                        </Button>
                    </Left>
                    <Body style={{flex: 3}}>
                    <Title>Doctrine Commands</Title>
                    </Body>
                    <Right/>
                </Header>

                <Content style={styles.content}>

                    <ScrollView
                        behaviour="height"
                        keyboardVerticalOffset={64}
                        style={{marginTop: '0%', flex: 1}}
                    >
                        <Card>
                            <CardItem bordered>
                                <Body>
                                <Text>bin\console make:entity</Text>
                                <Text style={{color: 'purple'}} note>create or update a doctrine entity class</Text>
                                </Body>
                            </CardItem>



                        </Card>

                    </ScrollView>

                </Content>


            </Container>
        );
    }
}