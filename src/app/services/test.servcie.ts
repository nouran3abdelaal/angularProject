import { Injectable } from '@angular/core';
import { Test2 } from './test2.servcie';

@Injectable()

export class Test {
    constructor(private test2: Test2) { }
}