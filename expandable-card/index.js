import Card from "../card";

const downArrow = "M 0 0 L 5 5 L 10 0";
const upArrow = "M 0 5 L 5 0 L 10 5";

export default class ExpandableCard extends Card {
   constructor() {
      super();
      this.expanded = false;
      this.root.innerHTML += /*html*/ `
         <style>
            :host {
               position: relative;
               padding-right: 35px;
               text-overflow: ellipsis;
               overflow: hidden;
               transition: height var(--transition-speed, .2s)
            }

            :host(:hover) {
               cursor: pointer;
            }

            svg {
               position: absolute;
               right: 10px;
               top: 15px;
            }

            path {
               fill: none;
               stroke: black;
               stroke-width: 2px;
               transition: d var(--transition-speed, .2s);
            }
         </style>
         <svg width="10" height="10">
            <path d="${this.expanded ? upArrow : downArrow}" />
         </svg>
      `;
   }

   connectedCallback() {
      this.addEventListener("click", this.onclick);
   }

   onclick() {
      this.expanded = !this.expanded;
      this.style.height = this.expanded
         ? `${this.scrollHeight}px`
         : this.height;
      this.root
         .querySelector("path")
         .setAttribute("d", this.expanded ? upArrow : downArrow);
   }
}
