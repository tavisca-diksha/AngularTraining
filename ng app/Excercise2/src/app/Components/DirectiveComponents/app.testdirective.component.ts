import { Directive, ElementRef, Component, Renderer2, Input, HostListener } from '@angular/core';
import { HttpService } from 'src/app/Services/app.http.service';

@Directive({
    selector: '[isUnique]'    
})
export class ColorDirective {
    constructor(private ele:ElementRef, private renderer: Renderer2, private serv : HttpService){

    }

    @Input('isUnique') isUnique:string;
    
    private applyBorderColour(color: string): void {
        this.renderer.setStyle(this.ele.nativeElement,
           'border-color',
           color);
    }

    @HostListener('blur')
    onmouseenter(): void {
        this.serv.getById(this.ele.nativeElement.value).subscribe((Data)=>{
            this.applyBorderColour('red');
        }, (error)=>{
            this.applyBorderColour('#ced4da');
        })        
    }
 }