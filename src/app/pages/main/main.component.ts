import { Component } from '@angular/core';
import { ContenidoComponent } from "../contenido/contenido.component";
import { AsideComponent } from "../aside/aside.component";

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [ContenidoComponent, AsideComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

}
