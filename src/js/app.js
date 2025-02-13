import UserForm from './components/UserForm';

const container = document.querySelector('.container');
const form = new UserForm(container);

form.bindToDOM();
