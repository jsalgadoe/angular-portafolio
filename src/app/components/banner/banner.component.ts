import { Component,
         OnInit,  
         Renderer2, 
         Inject, 
         AfterViewInit,
       } from '@angular/core';
import { DOCUMENT } from '@angular/common';



@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit, AfterViewInit {

 
  description:string[] = [
     "Hola, Mi Nombre es Jorge.", 
     "I am Creative.", 
     "I Love Design.", 
     "I Love to Develop." 
  ]
  
  
  constructor(private _renderer2: Renderer2, 
    @Inject(DOCUMENT) private _document: Document) {}

 
  ngOnInit(): void {
   
  }



 

 

  ngAfterViewInit(): void {
   
    let elemento = this._document.getElementById('addTextBanner');
    let script = this._renderer2.createElement('script');
    script.src = "../assets/lib/js/textBanner.js"
    this._renderer2.appendChild(elemento, script);

  }

 
  
 

  
}
