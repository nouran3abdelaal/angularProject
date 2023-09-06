import { Injectable } from '@angular/core';
import {catalogDetails} from ".//catalogDetails.model"

@Injectable({
  providedIn: 'root'
})
export class CatalogDetailsService {
  moive : catalogDetails ;


  constructor() { }
}
