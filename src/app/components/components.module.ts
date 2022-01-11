import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { BannerComponent } from './banner/banner.component';
import { BiographyComponent } from './biography/biography.component';




@NgModule({
  declarations: [
    NavbarComponent,
    BannerComponent,
    BiographyComponent,
   
  ],
  exports:[
    NavbarComponent,
    BannerComponent,
    BiographyComponent
   
  ],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }
