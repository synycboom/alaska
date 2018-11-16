import React from 'react';
import { StyleSheet, Animated, TouchableWithoutFeedback } from 'react-native';
import Video from 'react-native-video';
import { View, Spinner } from 'native-base';
import Orientation from 'react-native-orientation';
import { WHITE } from 'Alaska/src/theme';
import SeekBar from './SeekBar';

// https://www.radiantmediaplayer.com/media/bbb-360p.mp4
// https://player.vimeo.com/external/206340985.hd.mp4?s=0b055000e30067f11d3e2537bceb7157b47475bc&profile_id=119&oauth2_token_id=57447761
const styles = StyleSheet.create({
  viewContainer: {
    position: 'relative'
  },
  video: {
    width: '100%',
    height: '100%',
  },
  videoCover: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    ...StyleSheet.absoluteFill,
  },
});

class VideoPlayer extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      buffering: true,
      paused: false,
      progress: 0,
      duration: 0,
      showControl: true,
      orientation: Orientation.getInitialOrientation(),
    };
    this.animated = new Animated.Value(0);
  }

  componentDidMount() {
    Orientation.addOrientationListener(this.orientationDidChange);
  }

  componentWillUnmount() {
    Orientation.removeOrientationListener(this.orientationDidChange);
  }

  orientationDidChange = (orientation) => {
    this.setState({
      orientation
    });
  };

  handleBuffer = meta => {
    this.setState({
      buffering: meta.isBuffering,
    });
  };

  handleMainButtonTouch = () => {
    if (this.state.progress >= 1) {
      this.player.seek(0);
    }

    this.setState(state => {
      return {
        paused: !state.paused,
      };
    });
  };

  handleSeek = (progress) => {
    this.player.seek(progress * this.state.duration);
    this.setState({ progress, paused: false })
  };
  
  handleSlidingStart = () => {
    this.setState({ paused: true })
  }

  handleProgress = progress => {
    this.setState({
      progress: progress.currentTime / this.state.duration,
    });
  };

  handleEnd = () => {
    this.setState({ paused: true });
  };

  handleLoad = meta => {
    this.setState({
      duration: meta.duration,
    });
  };

  handleVideoPress = () => {
    console.log('presssssss')
    // this.setState(state => ({
    //   showControl: !state.showControl
    // }))
  };

  render() {
    let width = '100%';
    let height = '100%';

    const { url } = this.props;

    const { 
      buffering, 
      orientation, 
      paused,
      progress,
      duration,
      showControl,
    } = this.state;

    if (orientation === 'PORTRAIT') {
      width = '80%';
      height = '30%';
    }

    return (
      <View style={[styles.viewContainer, {width, height}]}>
        <TouchableWithoutFeedback onPress={this.handleVideoPress}>
          <Video
            paused={paused}
            style={styles.video}
            source={{ uri: url }}
            resizeMode='center'
            onBuffer={this.handleBuffer}
            onLoad={this.handleLoad}
            onProgress={this.handleProgress}
            onEnd={this.handleEnd}
            ref={ref => { this.player = ref; }}
          />
        </TouchableWithoutFeedback>
        <View style={styles.videoCover}>
          {buffering && <Spinner color={WHITE} />}
        </View>
        {showControl && (
          <SeekBar
            paused={paused}
            progress={progress}
            duration={duration}
            onMainButtonTouch={this.handleMainButtonTouch}
            onSeek={this.handleSeek}
            onSlidingStart={this.handleSlidingStart}
          />
        )}
      </View>
    );
  }
}

export default VideoPlayer;