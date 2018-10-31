import React from 'react';
import {
    Container, Header, Content, CardItem, Card,
    Left, Button, Icon, Body, Title, Right, Text
} from 'native-base';
import {ScrollView} from "react-native";
import {NavigationActions} from 'react-navigation';
import styles from '../style';


export default class MakeCommands extends React.Component {


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
                    <Title>Make Commands</Title>
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

                            <CardItem bordered>
                                <Body>
                                <Text>bin\console make:controller</Text>
                                <Text style={{color: 'purple'}} note>create a new controller</Text>
                                </Body>
                            </CardItem>

                            <CardItem bordered>
                                <Body>
                                <Text>bin\console make:crud</Text>
                                <Text style={{color: 'purple'}} note>create CRUD for doctrine entity class</Text>
                                </Body>
                            </CardItem>

                            <CardItem bordered>
                                <Body>
                                <Text>bin\console make:form</Text>
                                <Text style={{color: 'purple'}} note>create a new form class</Text>
                                </Body>
                            </CardItem>


                            {/*Other Make Commands*/}


                            <CardItem bordered>
                                <Body>
                                <Text>bin\console make:auth</Text>
                                <Text style={{color: 'purple'}} note>create an empty guard authenticator</Text>
                                </Body>
                            </CardItem>

                            <CardItem bordered>
                                <Body>
                                <Text>bin\console make:command</Text>
                                <Text style={{color: 'purple'}} note>create a new console command class</Text>
                                </Body>
                            </CardItem>

                            <CardItem bordered>
                                <Body>
                                <Text>bin\console make:fixtures</Text>
                                <Text style={{color: 'purple'}} note>create a new class to load doctrine fixtures</Text>
                                </Body>
                            </CardItem>

                            <CardItem bordered>
                                <Body>
                                <Text>bin\console make:functional-test</Text>
                                <Text style={{color: 'purple'}} note>create a new functional test class</Text>
                                </Body>
                            </CardItem>

                            <CardItem bordered>
                                <Body>
                                <Text>bin\console make:unit-test</Text>
                                <Text style={{color: 'purple'}} note>create a new unit test class</Text>
                                </Body>
                            </CardItem>

                            <CardItem bordered>
                                <Body>
                                <Text>bin\console make:migration</Text>
                                <Text style={{color: 'purple'}} note>create a new migration based on database changes</Text>
                                </Body>
                            </CardItem>

                            <CardItem bordered>
                                <Body>
                                <Text>bin\console make:serializer:encoder</Text>
                                <Text style={{color: 'purple'}} note>create a new serializer encoder class</Text>
                                </Body>
                            </CardItem>

                            <CardItem bordered>
                                <Body>
                                <Text>bin\console make:subscriber</Text>
                                <Text style={{color: 'purple'}} note>create a new event subscriber class</Text>
                                </Body>
                            </CardItem>

                            <CardItem bordered>
                                <Body>
                                <Text>bin\console make:twig-extension</Text>
                                <Text style={{color: 'purple'}} note>create a new twig extension class</Text>
                                </Body>
                            </CardItem>

                            <CardItem bordered>
                                <Body>
                                <Text>bin\console make:user</Text>
                                <Text style={{color: 'purple'}} note>create a new security user class</Text>
                                </Body>
                            </CardItem>

                            <CardItem bordered>
                                <Body>
                                <Text>bin\console make:validator</Text>
                                <Text style={{color: 'purple'}} note>create a new validator and constraint class</Text>
                                </Body>
                            </CardItem>

                            <CardItem bordered>
                                <Body>
                                <Text>bin\console make:voter</Text>
                                <Text style={{color: 'purple'}} note>create a new security voter class</Text>
                                </Body>
                            </CardItem>


                        </Card>

                    </ScrollView>

                </Content>


            </Container>
        );
    }
}