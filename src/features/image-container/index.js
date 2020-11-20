import { CustomElement } from '../../core';

export default class ImageContainer extends CustomElement {
   constructor() {
      super();
      this.src = this.getAttribute('img') || '';
      this.alt = this.getAttribute('alt') || '';
      this.ratio = this.getAttribute('ratio');
      if (!this.ratio) {
         if (this.style.width && this.style.height) {
            this.ratio = `${this.style.width}:${this.style.height}`;
         } else {
            this.ratio = '16:9';
         }
      }
      this.root.innerHTML += /*html*/ `
         <style>
            :host {
               position: relative;
            }

            ${
               this.style.width
                  ? `
                  .image-placeholder {
                     padding-bottom:
                     calc(${this.style.width} / ${this.ratio.replace(':', '*')})
                  }

                  img {
                     position: absolute;
                     top: 0;
                     left: 0;
                     width: 100%;
                     height: 100%;
                  }
               `
                  : ''
            }            
         </style>
         <div class="image-placeholder"></div>
         <img src="${this.src}" alt="${this.alt}"/>
      `;
   }
}
