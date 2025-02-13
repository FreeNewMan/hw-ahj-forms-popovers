import {UserForm} from './components/UserForm.js';

const container = document.querySelector('.container');
const form = new UserForm(container);

form.bindToDOM();
