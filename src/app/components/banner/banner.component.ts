import { Component, OnInit, Renderer2, Inject, AfterViewInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit, AfterViewInit {

  constructor(private _renderer2: Renderer2, 
    @Inject(DOCUMENT) private _document: Document) { 

 
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    let elemento = this._document.getElementById('demo');
    let script = this._renderer2.createElement('script');
    script.src = "../assets/lib/js/navQuery.js"
    this._renderer2.appendChild(elemento, script);
  }


  
}
