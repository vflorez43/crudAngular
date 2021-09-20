import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

import { hotelList } from 'src/app/models/hotelList';

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.css']
})
export class ItemCardComponent implements OnInit {

  @Input() id: number = NaN;
  @Input() field1: string = '';
  @Input() field2: string = '';
  @Input() field3: string = '';
  @Input() field4: number = NaN;

  public title: string = '';
  public buscarHotel: string = '';

  public items: any = [];

  @Input() numberOption: number = 0; // Determinates the menu to know if we need Hotel options or guest options, and add more options in the future

  /*****  In case of have an image in JSON put the URL here *****/
  public imgURLFake: string = 'https://media-exp1.licdn.com/dms/image/C560BAQH9Cnv1weU07g/company-logo_200_200/0/1575479070098?e=2159024400&v=beta&t=QM9VSoWVooxDwCONWh22cw0jBBlBPcBOqAxbZIE18jw'
  

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    const subscribe = this.route.params.subscribe(params => {
      let title = '';
      title = this.route.snapshot.paramMap.get('title')!;
      this.buscarHotel = '';
      this.buscarHotel = this.route.snapshot.paramMap.get('hotelName')!;
      if(title && !this.buscarHotel){this.numberOption = 1;}
      else {this.numberOption = 2}

      this.items = null;
      switch(this.numberOption){
        case 1:
          this.title = '';
          this.title += `${title}`;
          this.items = hotelList;
          this.numberOption = 1;
        break;
        case 2:
          this.title = '';
          this.title += `${title}`;
          let huespedes = hotelList.filter((hotel: any) => hotel.name == this.buscarHotel);
          this.items = huespedes[0].guesList;
        break;
        default:
          alert('error');
          break;
      }
    })
  }

  delete(id: number, name: string){
    switch (this.numberOption) {
      case 1:
        this.items = hotelList.filter((item: any, index) => {
          if(item.id == id) hotelList.splice(index, 1)
          return item.id != id
        });
        break;
      case 2:
        this.items = hotelList.filter((item: any) => {
          if(item.name == this.buscarHotel){
            item.guesList.forEach((element: any, indice: number) => {
                if(element.id == id && name == element.name) hotelList[id].guesList.splice(indice, 1);
              $('#' + id).css('display', 'none');
            });
          }
        });
        break;
      default:
        break;
    }
  }
}
