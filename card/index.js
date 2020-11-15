export default class Card extends HTMLElement {
   constructor() {
      super();
      this.root = this.attachShadow({ mode: "open" });
      this.width = this.getAttribute("width");
      this.height = this.getAttribute("height");
      this.root.innerHTML = /*html*/ `
         <style>
            :host {
               display: block;
               width: ${this.width ? this.width : "inherit"};
               height: ${this.height ? this.height : "inherit"};
               padding: .5rem;
               border-radius: 3px;
               box-shadow: 0px 0px 4px rgba(10, 10, 10, .4);
            }
         </style>

         <slot></slot> 
      `;
   }
}
