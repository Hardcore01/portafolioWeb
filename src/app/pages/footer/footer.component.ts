import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [ CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

  datos=[
    {
      icono: 'assets/imgs/email.png',
      info: 'hnlopez95@hotmail.com'
    },
    {
      icono: 'assets/imgs/llamada-telefonica.png',
      info: '+502 3574-5952'
    },
    {
      icono: 'assets/imgs/localizacion.png',
      info: 'Retalhuleu, Guatemala'
    }
  ]
}
