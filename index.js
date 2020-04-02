
import {AppRegistry} from 'react-native';
import App from './App';
//入口名称
import {name as appName} from './app.json';

//注册跟组件
AppRegistry.registerComponent(appName, () => App);
