import { CustomElement } from '../core';

customElements.define(
   'section-card',
   class SectionCard extends CustomElement {
      constructor() {
         super();
         this.root.innerHTML += /*html*/ `
         <style>
            section {
               padding: 2rem;               
            }

            section > mat-card {
               padding: 2rem;
               h2 {
                  margin: 0 0 2rem 0;
               }
            }

            .custom-element-container {
               display: grid;
               grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
               gap: 5rem;
               place-items: center;
               margin-top: 2rem;
            }
         </style>

         <section>
            <mat-card>
               <h2>${this.getAttribute('name')} (<code>${this.getAttribute(
            'code'
         )}</code>)</h2>
               <slot name="desc"></slot>
               <h3>Attributes</h3>
               <slot name="attributes"></slot>
               <div class="custom-element-container">
                  <slot></slot>
               </div>
            </mat-card>
         </section>
      `;
      }
   }
);
