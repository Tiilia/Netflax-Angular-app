import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'affichageDate'
})
export class AffichageDatePipe implements PipeTransform {

  transform(stringDate: string) {
    let date = new Date(stringDate)
    let day = date.getDate();
    let month = date.getMonth();
    let year = date.getFullYear();

    return `${day}-${month + 1}-${year}`
  }

}
