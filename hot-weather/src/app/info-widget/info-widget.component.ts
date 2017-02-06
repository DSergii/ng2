import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-info-widget',
  templateUrl: './info-widget.component.html',
  styleUrls: ['./info-widget.component.css']
})
export class InfoWidgetComponent implements OnInit {

	@Input()
	public info:any;

	constructor() { 

	}

	ngOnInit() {
		this.info = {title:'Nam libero voluptatem',img:'assets/1.jpg'};
	}

}
