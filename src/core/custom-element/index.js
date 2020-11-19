export default class CustomElement extends HTMLElement {
   constructor() {
      super();
      this.root = this.attachShadow({ mode: 'open' });
      this.root.innerHTML = /*html*/ `
         <style>
            :host {
               display: block;
            }
         </style>
      `;
   }
}
