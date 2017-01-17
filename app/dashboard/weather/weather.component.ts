import { Component } from '@angular/core';

import { WeatherService } from '../services/weather.service';

@Component({
    selector: 'weather',
    templateUrl: 'weather.component.html',
    providers: [WeatherService]
})

export class WeatherComponent {
}