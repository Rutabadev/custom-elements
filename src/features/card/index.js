import { CustomElement } from '../../core';

export default class Card extends CustomElement {
   constructor() {
      super();
      this.hoverable =
         this.getAttribute('hoverable') ||
         this.getAttribute('hoverable') === '';
      this.root.innerHTML += /*html*/ `
         <style>
            :host {               
               padding: .5rem;
               border-radius: 3px;
               box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
               overflow: hidden;               
            }
         </style>

         <slot></slot> 
      `;
      if (this.hoverable) {
         this.root.innerHTML += /*html*/ `
            <style>
               :host(:hover) {                  
                  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
               }
            </style>
         `;
      }
      this.transition =
         'box-shadow var(--transition-speed, .2s) cubic-bezier(.25,.8,.25,1)';
   }

   set transition(value) {
      this.style.transition = value;
   }

   get transition() {
      return this.style.transition;
   }
}
