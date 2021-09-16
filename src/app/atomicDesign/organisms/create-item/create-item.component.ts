import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { IGuest } from 'src/app/environment/guest';
import { IHotel } from 'src/app/environment/hotel';

@Component({
  selector: 'app-create-item',
  templateUrl: './create-item.component.html',
  styleUrls: ['./create-item.component.css']
})
export class CreateItemComponent implements OnInit {

  public title: string = '';

  public field1: string = '';
  public field2: string = '';
  public field3: string = '';
  public field4: Number;

  constructor() { 
    this.field4 = NaN;
  }

  ngOnInit(): void {
  }

  saveData(form: NgForm){
    console.log(form.value);
  }

}
