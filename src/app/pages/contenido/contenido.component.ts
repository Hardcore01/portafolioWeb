import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PerfilComponent } from "../perfil/perfil.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-contenido',
  standalone: true,
  imports: [CommonModule, PerfilComponent, PerfilComponent, FooterComponent],
  templateUrl: './contenido.component.html',
  styleUrl: './contenido.component.css'
})
export class ContenidoComponent {

  cards=[
    {
      titulo:'aplicacion web de gestion de productos',
      descripcion:'El proyecto consiste en presenta los productos de forma de catalogo, contiene varias categorias para visualizar los productos, tambien se presenta una tabla para mostrar los datos completos de los productos con las acciones de agregar, modificar y eliminar, obteniendo lo desde una API publica',
      imagen:'/assets/imgs/paginaweb.jpg',
      imgweb: 'assets/imgs/web.png',
      web:'https://webappapipublica.netlify.app/',
      imgrepo:'assets/imgs/github.png',
      repo:'https://github.com/Hardcore01/webApp_api_publica.git',
      tecnologias:['HTML','CSS','JavaScript','Bootstrap']
    },
    {
      titulo:'sitio web de catalogo de productos',
      descripcion:'Desarrollo de pagina web compuesta por varias secciones, para presentar productos de forma organizada, enfocandome en la estructura semantica del contenido y el diseño visual, ',
      imagen:'assets/imgs/carpinteriaImg.jpeg',
      imgweb: 'assets/imgs/web.png',
      web:'https://carpinteriaroel.netlify.app/',
      imgrepo:'assets/imgs/github.png',
      repo:'https://github.com/Hardcore01/web-carpinteria.git',
      tecnologias:['HTML','CSS']
    },
    {
      titulo:'crud-app',
      descripcion:'Esta aplicacion consiste en gestionar los productos a traves de las operaciones CRUD, creando la api con c#, y conectando la base de datos con sql server, ademas tiene la implementacion de inicio de sesion con autenticacion JWT, y encriptacion Hash',
      imagen:'assets/imgs/crud-proyect.png',
      imgweb: 'assets/imgs/web.png',
      web:'',
      imgrepo:'assets/imgs/github.png',
      repo:'https://github.com/Hardcore01/CRUD_API.git',
      tecnologias:['C# .NET', 'ANGULAR', 'ANGULAR MATERIAL', 'CSS', 'SQL SERVER', 'BOOTSTRAP']
    },
   
  ]

}
