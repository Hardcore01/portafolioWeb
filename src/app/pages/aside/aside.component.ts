import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-aside',
  standalone: true,
  imports: [ CommonModule],
  templateUrl: './aside.component.html',
  styleUrl: './aside.component.css'
})
export class AsideComponent {

  contactos=[
    {
      icono: 'assets/imgs/llamada-telefonica.png',
      info: '+502 3574-5952'
    },
    {
      icono: 'assets/imgs/email.png',
      info: 'hnlopez95@hotmail.com',
    },
    {
      icono: 'assets/imgs/localizacion.png',
      info: 'Retalhuleu, Guatemala'
    }
  ]
}
