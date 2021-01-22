import { Component } from '@angular/core';
import { rejects } from 'assert';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  nombre     :String   = 'Capitan America';
  nombre2     :string   = 'rAfAEl DAvId rOmeRO';
  arregloNum :number[] = [1,2,3,4,5,6,7,8,9,10];
  arregloStr :string[] = ["Rafael","Tiffany","Fernando","Jose","Joaco","Estefi","Gato"];
  PI         :number   = Math.PI;
  porcentaje :number   = 0.234;
  salario    :number   = 1234.5;
  fecha      :Date     = new Date();

  heroe = {
    nombre: 'Logan',
    clave: 'Wolverine',
    edad: 500,
    direccion: {
      calle: 'Primera',
      casa: 20
    }
  };

  valorPromesa = new Promise<string>((resolve,rejects) =>{
      setTimeout(()=>{
        resolve('Llego la data');
      },4500);
  });

  

}
