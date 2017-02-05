import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Place } from '../interfaces/plase';

@Component({
  selector: 'app-main-widget',
  templateUrl: './main-widget.component.html',
  styleUrls: ['./main-widget.component.css']
})
export class MainWidgetComponent implements OnInit {

	public placeImg: string = '../../images/1.jpg';

	public places: any[] = [
		{
			title: 'Barselona',
			description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
			img: '../../images/barselona.jpg',
			weather: '+25'
		},
		{
			title: 'Rome',
			description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
			img: '../../images/rome.jpg',
			weather: '+18'
		},
		{
			title: 'Vinice',
			description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
			img: '../../images/venice.jpg',
			weather: '+22'
		}
	]

	@Output()
	public clickByPlace:EventEmitter<Place> = new EventEmitter();

	constructor() { }


	ngOnInit() {
	}

	showPlace(e) {
		this.placeImg = e.img;
		this.clickByPlace.next(e);
	}

}
