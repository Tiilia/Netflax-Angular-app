import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'affichageYear'
})
export class AffichageYearPipe implements PipeTransform {

  transform(stringDate: string) {
    let date = new Date(stringDate)

    return date.getFullYear();
  }


}
