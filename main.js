import { KeepAwake, registerRootComponent } from 'expo';
import App from './App.js';

if (__DEV__) {
  KeepAwake.activate();
}

registerRootComponent(App);
