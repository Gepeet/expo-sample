import React from 'react';
import { WebView } from 'react-native-webview';

const WebApp = () => {
  return (
    <WebView
      source={{ uri: 'https://offlinefirsttest.bubbleapps.io/version-test?debug_mode=true' }}
      style={{ flex: 1 }}
    />
  );
};

export default WebApp;
