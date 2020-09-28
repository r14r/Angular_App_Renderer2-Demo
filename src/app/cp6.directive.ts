import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({ 
     selector: '[cp6]' 
})
export class CP6Directive {
   constructor(private elRef: ElementRef, private renderer: Renderer2) {
   }
   @HostListener('click') 
   performTask() {
      this.renderer.setAttribute(this.elRef.nativeElement, 'id', 'xyz');
   }
}

