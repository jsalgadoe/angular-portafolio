import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { BannerComponent } from './banner/banner.component';




@NgModule({
  declarations: [
    NavbarComponent,
    BannerComponent,
   
  ],
  exports:[
    NavbarComponent,
    BannerComponent
   
  ],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }
