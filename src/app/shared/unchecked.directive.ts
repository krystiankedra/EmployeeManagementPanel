import { Directive, Renderer2, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appUnchecked]'
})
export class UncheckedDirective {

  constructor(private el: ElementRef , private renderer: Renderer2) { }


  // tslint:disable-next-line:use-life-cycle-interface
  ngOnInit () {
    const li = this.el.nativeElement;
    this.renderer.setStyle(li, 'list-style-image' , 'url(/assets/Unchecked.png)');
  }
}
