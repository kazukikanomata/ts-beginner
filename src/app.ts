import {Item} from './item';
var elem = document.getElementById('output');
var aBook = new Item('初めてのTypeScript', 2980);
aBook.say(elem);