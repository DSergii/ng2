import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-weather-widget',
  templateUrl: './weather-widget.component.html',
  styleUrls: ['./weather-widget.component.css']
})
export class WeatherWidgetComponent implements OnInit {

	public title: string = 'Погода в вашем городе';

	@Input()
	public weather:string = '';

	constructor() { }

	ngOnInit() {
	}

}
