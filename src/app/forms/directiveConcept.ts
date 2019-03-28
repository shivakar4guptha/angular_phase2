import {Directive , ElementRef, HostListener} from  '@angular/core' ;

@Directive({
    selector: '[cusDir]'
})
export class CustomDir{
    @HostListener('click') mouseMoved(e){
        console.log("on mouse leave...", e)
              
    }
    // @HostListener('click') onClick1(e){
    //     console.log("on mouse leave...", e)
    // }
    constructor(elemtRefCon: ElementRef){
        elemtRefCon.nativeElement.style.color= "red";
    }

}