export class Popover {
    constructor() {
    }

    showPopover(caption, message, element) {

       const popoverElement = document.createElement('div');
       popoverElement.classList.add('popover');
       
       const arrow = document.createElement('div');
       arrow.classList.add('arrow');
       
       const pheader = document.createElement('h3');
       pheader.classList.add('popover-header');
       pheader.textContent = caption;
   
       const pbody = document.createElement('div');
       pbody.classList.add('popover-body');
       pbody.textContent = message;
   
       popoverElement.appendChild(pheader);
       popoverElement.appendChild(pbody);
       popoverElement.appendChild(arrow);
       
       document.body.appendChild(popoverElement);


       const { left, top } = element.getBoundingClientRect();

       popoverElement.style.left = left + element.offsetWidth / 2 - popoverElement.offsetWidth / 2  + 'px';
       popoverElement.style.top = top - popoverElement.offsetHeight -10 +'px';

       return popoverElement;
    }
  

    removePopover(el) {
        el.remove();
    }


}


