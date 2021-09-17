import { Component, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

import { hotelList } from 'src/app/models/hotelList';
// import { guestList } from 'src/app/environment/hotelList';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {

  public title: string = '';
  public buscarHotel: string = '';
  public item: string = '';
  public numberOption: number = 0;

  public items: any = [];

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    // const title = this.route.snapshot.paramMap.get('title')!;


    // this.route.queryParams.subscribe(params => {
    //   this.buscarHotel = params['buscarHotel'];
    // });




    const title1 = this.route.params.subscribe(params => {
      let title = this.route.snapshot.paramMap.get('title')!;
      if(title){
        this.title = '';
        this.title += `${title}`;
        if(title == 'Hotel'){
          this.items = hotelList;
          this.numberOption = 1;
        }else{
          this.buscarHotel = this.route.snapshot.paramMap.get('hotelName')!;
          let huespedes = this.items.filter((hotel: any) => hotel.name == this.buscarHotel);
          this.items = huespedes[0].guesList;
          this.numberOption = 2;
        }
      }
    })
    
  }
  

}
