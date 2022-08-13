import { shadeColor } from '../utils/shadeColor';

const colors = {
  brand: {
    500: '#194BFB',
    600: shadeColor('#194BFB', -15),
  },
  text: '#718096',
  border: {
    500: '#E2E8F0',
    600: shadeColor('#E2E8F0', -15),
  },
  gray: {
    50: '#fafafa',
    100: '#E2E8F0',
    500: '#A0AEC0',
    900: '#1A202C',
  },
  black: {
    600: '#1A202C',
  },
  red: {
    500: '#EB5757',
  },
  error: {
    500: '#E53E3E',
    600: shadeColor('#E53E3E', -15),
  },
};

export default colors;
