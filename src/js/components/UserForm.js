// import Popover from './Popover';
import { showPopover, removePopover } from './Popover';

// const popoverFactory = new Popover();
const popoverSettings = {
  title: 'Заголовок',
  message: 'Вот так должен выглядеть виджет в целом, для упрощения будем считать, что виджет всегда должен показываться сверху.',
};

export default class UserForm {
  constructor(parentEl) {
    this.parentEl = parentEl;
    this.popover = undefined;
    this.onSubmit = this.onSubmit.bind(this);
  }

  static get markup() {
    return `
        <form class="user-form">
            <button class="submit">Click to toggle popover</button>
        </form>
        `;
  }

  static get submitSelector() {
    return '.submit';
  }

  static get selector() {
    return '.user-form';
  }

  bindToDOM() {
    this.parentEl.innerHTML = UserForm.markup;
    this.element = this.parentEl.querySelector(UserForm.selector);
    this.submit = this.element.querySelector(UserForm.submitSelector);

    this.element.addEventListener('submit', this.onSubmit);
  }

  onSubmit(e) {
    e.preventDefault();

    if (!this.popover) {
      const { title, message } = popoverSettings;
      this.popover = showPopover(title, message, e.target.elements[0]);
    } else {
      removePopover(this.popover);
      this.popover = undefined;
    }
  }
}
