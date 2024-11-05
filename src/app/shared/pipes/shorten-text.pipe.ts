import { Injectable, Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortenText'
})
@Injectable({
  providedIn: 'root'
})
export class ShortenTextPipe implements PipeTransform {

  transform(value: any): unknown {
    return value.substr(0,50)+" ...";
  }

}
