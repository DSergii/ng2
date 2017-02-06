import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Place } from '../interfaces/plase';

@Component({
  selector: 'app-main-widget',
  templateUrl: './main-widget.component.html',
  styleUrls: ['./main-widget.component.css']
})
export class MainWidgetComponent implements OnInit {

	public placeImg: string = 'assets/1.jpg';

	public places: any[] = [
		{
			title: 'Barselona',
			description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
			img: 'assets/barselona.jpg',
			weather: '+25',
			water: '22'
		},
		{
			title: 'Rome',
			description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
			img: 'assets/rome.jpg',
			weather: '+18',
			water: '-'
		},
		{
			title: 'Vinice',
			description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
			img: 'assets/venice.jpg',
			weather: '+22',
			water: '24'
		}
	]

	@Output()
	public clickByPlace:EventEmitter<Place> = new EventEmitter();

	constructor() { }


	ngOnInit() {
	}

	showPlace(e) {
		this.placeImg = e.img;
		this.clickByPlace.emit(e);
	}

}
