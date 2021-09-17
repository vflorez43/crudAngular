import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

import { guest } from 'src/app/models/guest';
import { hotel } from 'src/app/models/hotel';
import { hotelList } from 'src/app/models/hotelList';
// import { guestList } from 'src/app/models/guestList';

@Component({
  selector: 'app-create-item',
  templateUrl: './create-item.component.html',
  styleUrls: ['./create-item.component.css']
})
export class CreateItemComponent implements OnInit {

  public title: string = '';
  public numberOption: number = 0; // Determinates the menu to know if we need Hotel options or guest options, and add more options in the future

  public field1: string = '';
  public field2: string = '';
  public field3: string = '';
  public field4: string = '';

  public hotelName: string = '';

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {

    this.route.queryParams.subscribe(params => {
      this.hotelName = this.route.snapshot.paramMap.get('hotelName')!;
    });



    const title = this.route.snapshot.paramMap.get('title')!;
    if(title){
      this.title += `${title}`;
      if(title == 'Hotel') this.numberOption = 1;
      else this.numberOption = 2;
      switch (this.numberOption) {
        case 1:
          this.field1 = hotel.name;
          this.field2 = hotel.direction;
          this.field3 = hotel.Estate;
          this.field4 = hotel.phone;
          break;
        case 2:
          this.field1 = guest.name;
          this.field2 = guest.document;
          this.field3 = guest.email;
          this.field4 = guest.phone;
          break;
      
        default:
          alert('Error....')
          break;
      }
    }
  }

  saveData(form: NgForm){
    switch (this.numberOption) {
      case 1:
        let newHotel = {
          id: hotelList.length + 1,
          name: form.value.field1,
          direction: form.value.field2,
          phone: form.value.field4,
          Estate: form.value.field3,
          guesList: null!
        }
        hotelList.push(newHotel)
        break;
      case 2:
        let newGuest = {
          // id: guestList.length + 1,
          id: 1,
          name: form.value.field1,
          document: form.value.field2,
          email: form.value.field3,
          phone: form.value.field4,
        }
        // guestList.push(newGuest)
        break;
    
      default:
        break;
    }

    hotelList.push()
  }

}
