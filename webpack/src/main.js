import _ from 'lodash';
import printMe from './print.js';

function component() {
  var element = document.createElement('div');
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  var btn = document.createElement('button');
  btn.innerHTML = 'click me';
  btn.onclick = printMe;

  element.appendChild(btn)

  return element;
}

document.body.appendChild(component());
