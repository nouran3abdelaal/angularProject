import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class BackendSource {
    public backendSource: string = 'local';
    constructor(){}
}