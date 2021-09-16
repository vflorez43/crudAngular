import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {

  public title: string = '';
  public item: string = '';


  public items = [
    'holi', 'holii', 'holii', 'holiii', 'holi', 'holii', 'holii', 'holiii'
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
