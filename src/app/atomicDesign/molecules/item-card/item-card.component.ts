import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.css']
})
export class ItemCardComponent implements OnInit {

  @Input() field1: string = '';
  @Input() field2: string = '';
  @Input() field3: string = '';
  @Input() field4: number = NaN;

  @Input() numberOption: number = 0; // Determinates the menu to know if we need Hotel options or guest options, and add more options in the future

  /*****  In case of have an image in JSON put the URL here *****/
  public imgURLFake: string = 'https://media-exp1.licdn.com/dms/image/C560BAQH9Cnv1weU07g/company-logo_200_200/0/1575479070098?e=2159024400&v=beta&t=QM9VSoWVooxDwCONWh22cw0jBBlBPcBOqAxbZIE18jw'
  

  constructor() { }

  ngOnInit(): void {
  }

}
