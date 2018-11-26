import React from 'react';
import { StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { Text, View, Icon } from 'native-base';
import Slider from 'react-native-slider';
import { WHITE, FONT_MEDIUM } from 'Alaska/src/theme';

const styles = StyleSheet.create({
  viewControls: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    height: 48,
    left: 0,
    bottom: 0,
    right: 0,
    position: 'absolute',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingHorizontal: 10,
  },
  iconPauseButton: {
    color: WHITE,
    flexBasis: '5%',
    fontSize: FONT_MEDIUM,
    marginRight: 10,
  },
  slider: {
    flex: 1
  },
  textDuration: {
    color: WHITE,
    textAlign: 'center',
    fontSize: FONT_MEDIUM,
    marginLeft: 10,
  },
});

function secondsToTime(time) {
  return ~~(time / 60) + ':' + (time % 60 < 10 ? '0' : '') + time % 60;
}

const SeekBar = ({
  paused,
  progress,
  duration,
  onSeek,
  onSlidingStart,
  onMainButtonTouch,
}) => {
  return (
    <View style={styles.viewControls}>
      <TouchableWithoutFeedback onPress={onMainButtonTouch}>
        <Icon
          style={styles.iconPauseButton}
          name={!paused ? 'pause' : 'play'}
        />
      </TouchableWithoutFeedback>

      <Slider
        onSlidingStart={onSlidingStart}
        onSlidingComplete={onSeek}
        value={progress}
        style={styles.slider}
        minimumTrackTintColor={WHITE}
        thumbTintColor={WHITE}
        maximumTrackTintColor='rgba(255, 255, 255, 0.14)'
      />

      <Text style={styles.textDuration}>
        {secondsToTime(Math.floor(progress * duration))}
      </Text>
    </View>
  );
}

export default SeekBar;