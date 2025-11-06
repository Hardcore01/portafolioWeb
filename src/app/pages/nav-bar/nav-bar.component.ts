import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Route } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [ CommonModule, RouterModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {

  scrollTo(elemtoId:string){
    const element = document.getElementById(elemtoId);
    if(element){
      element.scrollIntoView({behavior:'smooth', block:'start'});
    }
  }
}
