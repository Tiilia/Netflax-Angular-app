import { Pipe, PipeTransform, SecurityContext } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'urlVideo'
})
export class UrlVideoPipe implements PipeTransform {

  constructor(private _sanitizer: DomSanitizer) { }

  transform(url: string) {
    let new_url = "";
    new_url = url.replace("watch?v=", "embed/")
    new_url += "?autoplay=1&mute=1"

    return this._sanitizer.bypassSecurityTrustResourceUrl(new_url);
  }

}
