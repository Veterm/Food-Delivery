'use strict'
require('es6-promise').polyfill();
import 'nodelist-foreach-polyfill';

import     tabs from './modules/tabs';
import   modal from './modules/modal';
import   timer from './modules/timer';
import   cards from './modules/cards';
import     cacl from './modules/cacl';
import   forms from './modules/forms';
  import slider from './modules/slider';
  import { openModal } from './modules/modal';

window.addEventListener('DOMContentLoaded', () => {

  const modalTimerId = setTimeout(()=>openModal('.modal', modalTimerId),50000);
    

        tabs('.tabheader__item', '.tabcontent', '.tabheader__items', 'tabheader__item_active');
        modal('[data-modal]', '.modal', modalTimerId);
        timer('.timer', '2023-03-31');
        cards();
        cacl();
        forms('form',modalTimerId);
        slider({
          container: '.offer__slider',
          nextArrow: '.offer__slider-next',
          slide: '.offer__slide',
          prevArrow: '.offer__slider-prev',
          totalCounter: '#total',
          currentCounter: '#current',
          wrapper: '.offer__slider-wrapper',
          field: '.offer__slider-inner'
        });

      
});
