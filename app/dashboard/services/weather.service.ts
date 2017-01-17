import { Injectable } from '@angular/core';
import {Http} from '@angular/http';

import { KEY } from '../interfaces/key.interface';


@Injectable()
export class WeatherService {

    constructor(private http: Http){}

}