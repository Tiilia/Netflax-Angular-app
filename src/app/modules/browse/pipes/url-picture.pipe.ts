import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'urlPicture'
})
export class UrlPicturePipe implements PipeTransform {

  transform(url: string): string {
    let new_url = "https://image.tmdb.org/t/p/w500" + url;
    return new_url;
  }

}
