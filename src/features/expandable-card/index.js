import Card from "../card";

const downArrow = "M 0 0 L 5 5 L 10 0";
const upArrow = "M 0 5 L 5 1 L 10 5";

export default class ExpandableCard extends Card {
   constructor() {
      super();
      this.expanded = false;
      this.shrinkedHeight = this.scrollHeight + "px";
      this.leaveWrap = !!this.style.height;
      this.transitionSpeed = (
         getComputedStyle(this).getPropertyValue("--transition-speed") || "200"
      )
         .replace("ms", "")
         .replace("s", "000");
      this.expandElements = [
         {
            0: () => {
               !this.leaveWrap &&
                  setTimeout(() => {
                     this.style["white-space"] = "nowrap";
                  }, this.transitionSpeed);
            },
            1: () => {
               this.style["white-space"] = "normal";
            },
         },
         {
            0: () => {
               this.style.height = this.shrinkedHeight;
            },
            1: () => {
               this.style.height = this.scrollHeight + "px";
            },
         },
         {
            0: () => {
               this.root.querySelector("path").setAttribute("d", downArrow);
            },
            1: () => {
               this.root.querySelector("path").setAttribute("d", upArrow);
            },
         },
      ];
      this.root.innerHTML += /*html*/ `
         <style>
            :host {
               position: relative;
               padding-right: 35px;
               max-width: 100%;
               overflow: hidden;
               ${
                  !this.leaveWrap
                     ? `
                     white-space: nowrap;
                     text-overflow: ellipsis;
                  `
                     : ""
               }               
               height: ${this.shrinkedHeight}
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

            .fadeout {
               position: absolute;
               background: linear-gradient(transparent, white);
               height: 10px;
               left: 0;
               right: 0;
               bottom: 0;
            }
         </style>
         <svg width="10" height="10">
            <path d="${this.expanded ? upArrow : downArrow}" />
         </svg>
         <div class="fadeout"></div>
      `;

      this.transition += ", height var(--transition-speed, .2s)";
   }

   connectedCallback() {
      this.addEventListener("click", this.onclick);
   }

   onclick() {
      this.expanded = !this.expanded;
      this.expandElements.forEach((el) => el[+this.expanded]());
   }
}
