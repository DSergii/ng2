import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-weather-widget',
  templateUrl: './weather-widget.component.html',
  styleUrls: ['./weather-widget.component.css']
})
export class WeatherWidgetComponent implements OnInit {

	public title: string = 'Et harum quidem';

	@Input()
	public w_info:any;

	constructor() { }

	ngOnInit() {
		this.w_info = {weather:"+15",water:"17"};
	}

}
