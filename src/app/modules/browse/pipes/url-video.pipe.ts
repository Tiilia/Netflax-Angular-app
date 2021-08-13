import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'urlVideo'
})
export class UrlVideoPipe implements PipeTransform {

  transform(url: string): string {
    let new_url = "";
    new_url = url.replace("watch?v=", "embed/")
    new_url += "?autoplay=1&mute=1"

    return new_url;
  }

}
