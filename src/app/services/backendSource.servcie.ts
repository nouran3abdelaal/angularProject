import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class BackendSourceService {
    public backendSource: string = 'local';
    constructor(){}
}