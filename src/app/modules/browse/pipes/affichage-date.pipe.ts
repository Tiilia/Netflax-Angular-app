import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'affichageDate'
})
export class AffichageDatePipe implements PipeTransform {

  transform(stringDate: string) {
    let date = new Date(stringDate)
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();

    let stringDay: string;
    let stringMonth: string = "";

    switch (day) {
      case 1: {
        stringDay = `${day}st`;
        break;
      }
      case 2: {
        stringDay = `${day}nd`;
        break;
      }
      case 3: {
        stringDay = `${day}rd`;
        break;
      }
      default: stringDay = `${day}th`
    }

    switch (month) {
      case 1: {
        stringMonth = "January";
        break;
      }
      case 2: {
        stringMonth = "February";
        break;
      }
      case 3: {
        stringMonth = "March";
        break;
      }
      case 4: {
        stringMonth = "April";
        break;
      }
      case 5: {
        stringMonth = "May";
        break;
      }
      case 6: {
        stringMonth = "June";
        break;
      }
      case 7: {
        stringMonth = "July";
        break;
      }
      case 8: {
        stringMonth = "August";
        break;
      }
      case 9: {
        stringMonth = "September";
        break;
      }
      case 10: {
        stringMonth = "October";
        break;
      }
      case 11: {
        stringMonth = "November";
        break;
      }
      case 12: {
        stringMonth = "December";
        break;
      }
    }

    return `${stringDay} ${stringMonth} ${year}`
  }

}
