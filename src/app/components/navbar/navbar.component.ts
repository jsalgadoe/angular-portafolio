import { Component, OnInit , HostBinding ,Renderer2,Inject,AfterViewInit} from '@angular/core';

import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit{

  toggle:boolean =  false;
  noNav:boolean = true;
  constructor(   private _renderer2: Renderer2, 
    @Inject(DOCUMENT) private _document: Document) { }

  ngOnInit(): void {
   
  }



  showAndHide(){
    this.toggle = !this.toggle;
    this.noNav = !this.noNav;

    if(this.toggle == false){
      let navEfecto = this._document.getElementById('nav__efect');
      let changeElement = this._renderer2.createElement('nav');
      changeElement.className = " animate__animated animate__fadeOutTopRight "
      this._renderer2.appendChild(navEfecto, changeElement);
    }

    console.log(` toggle = ${this.toggle} and novar =  ${this.noNav}`);
 
  }

  

}
