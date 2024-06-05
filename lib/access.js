const axios = require('axios');
const os = require('os');
const CFonts = require('cfonts');
const chalk = require('chalk');

const logoOptions = {
  font: '3d',
  align: 'bottom',
  colors: ['yellow'],
};

const whatsappOptions = {
  colors: ['white'],
  font: 'console',
  align: 'top',
};

CFonts.say('Kym', logoOptions);
CFonts.say('MEMEK\n', whatsappOptions);
