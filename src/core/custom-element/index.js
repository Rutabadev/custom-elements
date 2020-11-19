export default class CustomElement extends HTMLElement {
   constructor() {
      super();
      this.root = this.attachShadow({ mode: 'open' });
      this.width = this.getAttribute('width');
      this.height = this.getAttribute('height');
      this.root.innerHTML = /*html*/ `
         <style>
            :host {
               width: ${this.width ? this.width : 'inherit'};
               height: ${this.height ? this.height : 'inherit'};
            }
         </style>
      `;
   }
}
