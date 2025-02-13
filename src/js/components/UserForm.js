import { Popover } from "./Popover.js";


const popoverFactory = new Popover();
const popoverSettings = {
    title: "Заголовок",
    message: 'Вот так должен выглядеть виджет в целом, для упрощения будем считать, что виджет всегда должен показываться сверху.'
}


export class UserForm {
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
                
        if ( !this.popover ) {
            this.popover = popoverFactory.showPopover(popoverSettings.title, popoverSettings.message, e.target.elements[0]);
        } else
        {
            popoverFactory.removePopover(this.popover);
            this.popover = undefined;
        }
    }
}