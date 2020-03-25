// Startup https://reactnative.dev/docs/getting-started.html
// cd AwesomeProject
// Install cocopods
// npm run podInstall
// npm run ios

import React, {Component} from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

import tonClientReactNativeJs from 'ton-client-react-native-js';

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      accounts: [],
      isLoading: true,
    }
  }

  async componentDidMount () {
    const client = await this.getClient();
    const accounts = await this.getAccounts(client);
    this.setState({accounts, isLoading: false});
  }

  render() {
    if (this.state.isLoading) {
      return <View style={styles.container}><Text>Loading...</Text></View>
    }
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Ton React Native SDK was connected!</Text>
        <Text> The list of accounts:</Text>
        <FlatList
          data={this.state.accounts}
          renderItem={({item}) => {
            return (
            <View style={styles.section}>
              <Text>Typename: {item.__typename}</Text>
              <Text>Balance: {item.balance}</Text>
              <Text>Id: {item.id}</Text>
            </View>
          ) }}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    );
  }

  async getClient() {
    const config =  {
        defaultWorkchain: 0,
        servers: ['net.ton.dev'],
        log_verbose: false,
    };
    return tonClientReactNativeJs.TONClient.create(config);
  }

  async getAccounts(client) {
    return client.queries.accounts.query({}, 'id balance', [{path:'balance', direction:'DESC'}], 5);
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    padding: 20,
    justifyContent: 'center',
    marginTop: '20%',
    flexDirection: 'column'
  },
  title: {
    alignSelf: "center",
    justifyContent: "center"
  },
  section: {
    paddingTop: 20
  }
});
