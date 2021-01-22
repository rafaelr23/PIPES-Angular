import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'personalizado'
})
export class PersonalizadoPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): string {
    return 'Hola Mundo';
  }

}
