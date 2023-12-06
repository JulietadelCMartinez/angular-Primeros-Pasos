import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  public name: string = 'ironman';
  public age: number = 45;

  get capitalizedName(): string{ //no es mas que una propiedad que realmente es un método
    return this.name.toUpperCase(); //poner mayuscula el contenido
  }

  getHeroDescription(): string{
    return `${this.name} - ${this.age}`; //así se hace la concatenación
  }

  changeHero():void{
    this.name = 'Spiderman';
  }

  changeAge():void {
    this.age = 25;
  }

  resetForm(): void{
    this.name = 'ironman';
    this.age = 45;


    // document.querySelectorAll('h1')!.forEach(element => {
    //   element.innerHTML = '<h1>Desde Angular</h1>';
    // }); //estas instrucciones estan fuera del ciclo de deteccion de angular, los cambios que hagamos por javascript estan fuera del ciclo de deteccion de angular, como lo es en este caso
  }

}
