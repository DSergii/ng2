import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-main-widget',
  templateUrl: './main-widget.component.html',
  styleUrls: ['./main-widget.component.css']
})
export class MainWidgetComponent implements OnInit {

	@Output()
	public clickByPlace:EventEmitter<Widget.Place> = new EventEmitter();
	
	public placeImg: string = 'assets/1.jpg';

	public places: Widget.Place[]; 

	public tabs: Array<string>;


	constructor() { 

		this.places = [
			{
				title: 'Barselona',
				description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
				img: 'assets/barselona.jpg',
				weather: '+25',
				water: '22',
				sea: true,
				clubs: 48,
				hotels: 112
			},
			{
				title: 'Rome',
				description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
				img: 'assets/rome.jpg',
				weather: '+18',
				water: '-',
				sea: false,
				clubs: 24,
				hotels: 109
			},
			{
				title: 'Vinice',
				description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
				img: 'assets/venice.jpg',
				weather: '+22',
				water: '24',
				sea: true,
				clubs: 22,
				hotels: 98
			}
		]

		this.tabs = ['Sea', 'Clubs', 'Hotels'];
	}


	ngOnInit() {
	}

	showPlace(e) {
		this.placeImg = e.img;
		this.clickByPlace.emit(e);
	}

}
