import React from 'react';
import {Dimensions, View} from 'react-native';
import {styles} from './styles';
import YouTube from 'react-native-youtube-iframe';

const YoutubeVideo = ({videoId}: any) => {
  const onStateChange = (state: string) => {
    // console.log('YouTube Player State:', state);
  };

  return (
    <View style={styles.container}>
      <YouTube
        height={220}
        width={Dimensions.get('window').width - 25}
        play={true}
        videoId={videoId}
        onChangeState={onStateChange}
      />
    </View>
  );
};

export default YoutubeVideo;
