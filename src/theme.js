import { tint, shade } from 'polished';

// theme.js
export default {
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64],
  fontWeights: [0, 300, 400, 600, 700],
  letterSpacings: [0, 1, 2, 4, 8],
  lineHeights: {
    solid: 1,
    title: 1.25,
    copy: 1.5,
  },
  fonts: {
    serif: 'athelas, georgia, times, serif',
    sansSerif: '"Source Sans Pro", -apple-system, sans-serif',
  },
  space: [0, 4, 8, 16, 32, 64, 128, 256],
  radii: ['0', '4px', '8px', '16px'],
  width: [0, 16, 32, 64, 128, 256],
  minWidths: [0, 16, 32, 64, 128, 256],
  maxWidths: [0, 16, 32, 64, 128, 256, 512, 768, 1024, 1536],
  heights: [0, 16, 32, 64, 128, 256],
  minHeights: [0, 16, 32, 64, 128, 256],
  maxHeights: [0, 16, 32, 64, 128, 256],
  borders: [0, '1px solid transparent'],
  borderWidths: ['0', '1px', '2px', '4px'],
  shadows: [
    '0',
    '0px 2px 4px rgba(0, 0, 0, 0.1)',
    '0 7px 14px rgba(50,50,93,.1)',
  ],
  opacity: {
    disabled: 0.4,
  },
  colors: {
    primary: '#4E3FCE',
    blue: '#007ce0',
    navy: '#004175',
    copyColor: '#3F3D4B',
    // black: '#000',
    black: '#000e1a',
    'near-black': '#111',
    'dark-gray': '#333',
    'mid-gray': '#555',
    // gray: ' #777',
    grey: '#CCC',
    silver: '#999',
    'light-silver': '#aaa',
    'moon-gray': '#ccc',
    'light-gray': '#eee',
    'near-white': '#f4f4f4',
    white: '#fff',
    transparent: 'transparent',
    blacks: [
      'rgba(0,0,0,.0125)',
      'rgba(0,0,0,.025)',
      'rgba(0,0,0,.05)',
      'rgba(0,0,0,.1)',
      'rgba(0,0,0,.2)',
      'rgba(0,0,0,.3)',
      'rgba(0,0,0,.4)',
      'rgba(0,0,0,.5)',
      'rgba(0,0,0,.6)',
      'rgba(0,0,0,.7)',
      'rgba(0,0,0,.8)',
      'rgba(0,0,0,.9)',
    ],
    whites: [
      'rgba(255,255,255,.0125)',
      'rgba(255,255,255,.025)',
      'rgba(255,255,255,.05)',
      'rgba(255,255,255,.1)',
      'rgba(255,255,255,.2)',
      'rgba(255,255,255,.3)',
      'rgba(255,255,255,.4)',
      'rgba(255,255,255,.5)',
      'rgba(255,255,255,.6)',
      'rgba(255,255,255,.7)',
      'rgba(255,255,255,.8)',
      'rgba(255,255,255,.9)',
    ],
  },
  zIndices: [0, 9, 99, 999, 9999],
  messageStyle: {
    base: {
      color: shade(0.4, '#AAA'),
      backgroundColor: tint(0.9, '#AAA'),
      borderColor: '#AAA',
    },
    success: {
      color: shade(0.4, '#28C081'),
      backgroundColor: tint(0.9, '#28C081'),
      borderColor: '#28C081',
    },
    warning: {
      color: shade(0.4, '#FD9D28'),
      backgroundColor: tint(0.9, '#FD9D28'),
      borderColor: '#FD9D28',
    },
    danger: {
      color: shade(0.4, '#DC2C10'),
      backgroundColor: tint(0.9, '#DC2C10'),
      borderColor: '#DC2C10',
    },
    info: {
      color: shade(0.4, '#36ADF1'),
      backgroundColor: tint(0.9, '#36ADF1'),
      borderColor: '#36ADF1',
    },
  },
};
