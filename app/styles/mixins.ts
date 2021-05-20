import {Dimensions} from 'react-native';

const {width: wWidth, height: wHeight} = Dimensions.get('window');
const width = (num: number = 100) => (wWidth * num) / 100;
const height = (num: number = 100) => (wHeight * num) / 100;

export {width, height};
