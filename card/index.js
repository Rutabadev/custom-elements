export default class Card extends HTMLElement {
   constructor() {
      super();
      this.root = this.attachShadow({ mode: "open" });
   }

   connectedCallback() {
      const width = this.getAttribute("width");
      const height = this.getAttribute("height");
      this.root.innerHTML = /*html*/ `
         <style>
            :host {
               display: block;
               width: ${width ? width : "inherit"};
               height: ${height ? height : "inherit"};
               padding: .5rem;
               border-radius: 3px;
               box-shadow: 0px 0px 4px rgba(10, 10, 10, .4);
            }
         </style>

         <slot></slot> 
      `;
   }
}
