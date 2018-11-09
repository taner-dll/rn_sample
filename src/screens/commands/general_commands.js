import React from 'react';
import {
    Container, Header, Content, CardItem, Card,
    Left, Button, Icon, Body, Title, Right, Text
} from 'native-base';
import {ScrollView} from "react-native";
import {NavigationActions} from 'react-navigation';
import styles from '../style';


export default class GeneralCommands extends React.Component {


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
                    <Title>General Commands</Title>
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
                                <Text>bin\console about</Text>
                                <Text style={{color: 'purple'}} note>display information about the current
                                    project</Text>
                                </Body>
                            </CardItem>
                        </Card>

                        <Card>
                            <CardItem bordered>
                                <Body>
                                <Text>bin\console help [command]</Text>
                                <Text style={{color: 'purple'}} note>display help for a command</Text>
                                </Body>
                            </CardItem>
                        </Card>


                        <Card>
                            <CardItem bordered>
                                <Body>
                                <Text>bin\console cache:clear</Text>
                                <Text style={{color: 'purple'}} note>clear the cached information</Text>
                                </Body>
                            </CardItem>
                        </Card>

                        <Card>
                            <CardItem bordered>
                                <Body>
                                <Text>bin\console debug:router</Text>
                                <Text style={{color: 'purple'}} note>display current routes</Text>
                                </Body>
                            </CardItem>
                        </Card>

                        <Card>
                            <CardItem bordered>
                                <Body>
                                <Text>bin\console make:entity --regenerate</Text>
                                <Text style={{color: 'purple'}} note>generate all the getter/setter methods
                                    of existing entity</Text>
                                </Body>
                            </CardItem>
                        </Card>

                        <Card>
                            <CardItem bordered>
                                <Body>
                                <Text>bin\console doctrine:schema:validate</Text>
                                <Text style={{color: 'purple'}} note>validate the mapping files</Text>
                                </Body>
                            </CardItem>
                        </Card>

                        <Card>
                            <CardItem bordered>
                                <Body>
                                <Text>bin\console doctrine:schema:update</Text>
                                <Text style={{color: 'purple'}} note>update the current mapping metadata</Text>
                                </Body>
                            </CardItem>
                        </Card>

                        <Card>
                            <CardItem bordered>
                                <Body>
                                <Text>bin\console doctrine:migrations:diff</Text>
                                <Text style={{color: 'purple'}} note>generate a migration by comparing your current
                                    database</Text>
                                </Body>
                            </CardItem>
                        </Card>

                        <Card>
                            <CardItem bordered>
                                <Body>
                                <Text>bin\console doctrine:migrations:migrate</Text>
                                <Text style={{color: 'purple'}} note>execute a migration to a specified version or
                                    the latest avaible version</Text>
                                </Body>
                            </CardItem>
                        </Card>

                        <Card>
                            <CardItem bordered>
                                <Body>
                                <Text>bin\console list</Text>
                                <Text style={{color: 'purple'}} note>list commands</Text>
                                </Body>
                            </CardItem>
                        </Card>


                    </ScrollView>

                </Content>


            </Container>
        );
    }
}