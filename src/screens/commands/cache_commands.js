import React from 'react';
import {
    Container, Header, Content, CardItem, Card,
    Left, Button, Icon, Body, Title, Right, Text
} from 'native-base';
import {ScrollView} from "react-native";
import {NavigationActions} from 'react-navigation';
import styles from '../style';


export default class CacheCommands extends React.Component {


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
                    <Title>Cache Commands</Title>
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
                                <Text>bin\console doctrine:cache:clear</Text>
                                <Text style={{color: 'purple'}} note>flush a given cache</Text>
                                </Body>
                            </CardItem>

                            <CardItem bordered>
                                <Body>
                                <Text>bin\console doctrine:cache:flush</Text>
                                <Text style={{color: 'purple'}} note>same as [cache:clear]</Text>
                                </Body>
                            </CardItem>

                            <CardItem bordered>
                                <Body>
                                <Text>bin\console doctrine:cache:clear-collection-region</Text>
                                <Text style={{color: 'purple'}} note>clear a second-level cache collection region</Text>
                                </Body>
                            </CardItem>

                            <CardItem bordered>
                                <Body>
                                <Text>bin\console doctrine:cache:clear-entity-region</Text>
                                <Text style={{color: 'purple'}} note>clear a second-level cache entity region</Text>
                                </Body>
                            </CardItem>

                            <CardItem bordered>
                                <Body>
                                <Text>bin\console doctrine:cache:clear-metadata</Text>
                                <Text style={{color: 'purple'}} note>clears all metadata cache for an entity manager</Text>
                                </Body>
                            </CardItem>

                            <CardItem bordered>
                                <Body>
                                <Text>bin\console doctrine:cache:clear-query</Text>
                                <Text style={{color: 'purple'}} note>clears all query cache for an entity manager</Text>
                                </Body>
                            </CardItem>

                            <CardItem bordered>
                                <Body>
                                <Text>bin\console doctrine:cache:clear-query-region</Text>
                                <Text style={{color: 'purple'}} note>clear a second-level cache query region</Text>
                                </Body>
                            </CardItem>

                            <CardItem bordered>
                                <Body>
                                <Text>bin\console doctrine:cache:clear-result</Text>
                                <Text style={{color: 'purple'}} note>clears result cache for an entity manager</Text>
                                </Body>
                            </CardItem>

                            <CardItem bordered>
                                <Body>
                                <Text>bin\console doctrine:cache:contains</Text>
                                <Text style={{color: 'purple'}} note>check if a cache entry exists</Text>
                                </Body>
                            </CardItem>

                            <CardItem bordered>
                                <Body>
                                <Text>bin\console doctrine:cache:delete</Text>
                                <Text style={{color: 'purple'}} note>delete a cache entry</Text>
                                </Body>
                            </CardItem>

                            <CardItem bordered>
                                <Body>
                                <Text>bin\console doctrine:cache:stats</Text>
                                <Text style={{color: 'purple'}} note>gets stats on a given cache provider</Text>
                                </Body>
                            </CardItem>


                        </Card>

                    </ScrollView>

                </Content>


            </Container>
        );
    }
}