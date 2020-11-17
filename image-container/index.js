import CustomElement from "../core/custom-element";

export default class ImageContainer extends CustomElement {
   constructor() {
      super();
      this.src = this.getAttribute("img") || "";
      this.alt = this.getAttribute("alt") || "";
      this.ratio = this.getAttribute("ratio");
      if (!this.ratio) {
         if (this.width && this.height) {
            this.ratio = `${this.width}:${this.height}`;
         } else {
            this.ratio = "16:9";
         }
      }
      this.root.innerHTML += /*html*/ `
         <style>
            :host {
               display: block;
               position: relative;
               background-color: transparent;
            }

            .image-placeholder {
               padding-bottom: 
                  calc(${this.width} / ${this.ratio.replace(":", "*")})
            }

            img {
               position: absolute;
               top: 0;
               left: 0;
               width: 100%;
               height: 100%;
            } 
         </style>
         <div class="image-placeholder"></div>
         <img src="${this.src}" alt="${this.alt}"/>
      `;
   }
}
