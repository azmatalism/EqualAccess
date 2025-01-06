import React from 'react';
import {View} from 'react-native';
import {WebView} from 'react-native-webview';
import {styles} from './styles';

const SoundCloudAudio = ({trackUrl}: {trackUrl: string}) => {
  const iframeHtml = `
    <html>
      <body style="margin:0;padding:0;">
        <iframe 
          width="100%" 
          height="400" 
          scrolling="no" 
          frameborder="no" 
          allow="autoplay" 
          style="border:none;"
          src="${trackUrl}">
        </iframe>
      </body>
    </html>
  `;

  return (
    <View style={styles.container}>
      <WebView
        originWhitelist={['*']}
        source={{html: iframeHtml}}
        style={styles.webview}
        scrollEnabled={false}
      />
    </View>
  );
};

export default SoundCloudAudio;
