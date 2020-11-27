import { CustomElement } from '../../core';

export default class Code extends CustomElement {
   constructor() {
      super();
      this.code = this.getAttribute('value') || '';
      this.root.innerHTML = `
         <style>
            :host {
               background-color: #333;
               color: #eee;
               padding: 0.5rem 1rem;
            }

            pre {
               margin: 0
            }
         </style>
         <pre>
            <slot></slot>
         </pre>
      `;
   }

   connectedCallback() {
      const code = this.root.querySelector('slot').assignedNodes()[0].data;

      code.replace(/\n/g, '\n$');
      console.log(this.root.querySelector('slot').assignedNodes());

      this.root.querySelector('slot').assignedNodes()[0].textContent = code;
   }
}
