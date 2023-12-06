import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html', //comunica con el html y hace que se muestre la pagina web
  styleUrls: ['./app.component.css'] //esta como un arreglo porque se le puede proporcionar 'x' cantidad de estilos
})
export class AppComponent {
  public title: string = 'Mi primera app de Angular';
}
