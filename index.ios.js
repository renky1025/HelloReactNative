/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

var React = require('react-native');
var Index = require('./pages/Index');
var MenuList = require('react-native-tab');
var ScrollableTabView = require('react-native-scrollable-tab-view');

var {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ScrollView,

    TouchableOpacity,
    NavigatorIOS,
} = React;

var data = {
  "Language": {
    "All": ["All"],
    "Web Front End": [
      "HTML",
      "CSS",
      "JavaScript"
    ],
    "Server": [
      "Node.js",
      "PHP",
      "Python",
      "Ruby"
    ]
  },
  "Tool":{
    "All": ["All"],
    "Apple": ["Xcode"],
    "Other": ["Sublime Text", "WebStrom",]
  }
};

var NV = React.createClass({
    render: function(){
      return (
        <View style={{marginTop:25}}>
          <MenuList data={data} nSelected={1} tabSelected={0} click={this.onPress}/>
          <ScrollableTabView>
            <ReactPage tabLabel="React" />
            <FlowPage tabLabel="Flow" />
            <JestPage tabLabel="Jest" />
          </ScrollableTabView>
        </View>  
      );
    },
    onPress: function(val){
      alert(val);
    }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
import FacebookTabsExample from './FacebookTabsExample';

AppRegistry.registerComponent('HelloReactApp', () => FacebookTabsExample);

//AppRegistry.registerComponent('HelloReactApp', () => NV);
