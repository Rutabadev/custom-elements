export default class ImageContainer extends HTMLElement {
   constructor() {
      super();
      this.src = this.getAttribute("img") || "";
      this.alt = this.getAttribute("alt") || "";
      this.width = this.getAttribute("width") || "200px";
      this.ratio = this.getAttribute("ratio") || "16:9";
      this.root = this.attachShadow({ mode: "open" });
      this.root.innerHTML = /*html*/ `
         <style>
            :host {
               --image-width: ${this.width};
               display: block;
               position: relative;
               width: var(--image-width);
               background-color: transparent;
            }

            .image-placeholder {
               padding-bottom: 
               calc(var(--image-width) / ${this.ratio.replace(":", "*")})
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
