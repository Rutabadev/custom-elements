import CustomElement from "../core/custom-element";

export default class Card extends CustomElement {
   constructor() {
      super();
      this.root.innerHTML += /*html*/ `
         <style>
            :host {
               display: block;
               padding: .5rem;
               border-radius: 3px;
               box-shadow: 0px 0px 4px rgba(10, 10, 10, .4);
               overflow: hidden;
            }
         </style>

         <slot></slot> 
      `;
   }
}
