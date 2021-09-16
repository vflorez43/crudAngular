import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './atomicDesign/molecules/header/header.component';
import { FooterComponent } from './atomicDesign/molecules/footer/footer.component';
import { HomeComponent } from './atomicDesign/organisms/home/home.component';
import { ItemListComponent } from './atomicDesign/organisms/item-list/item-list.component';
import { CreateItemComponent } from './atomicDesign/organisms/create-item/create-item.component';
import { SectionSeparatorComponent } from './atomicDesign/molecules/section-separator/section-separator.component';
import { ItemCardComponent } from './atomicDesign/molecules/item-card/item-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ItemListComponent,
    CreateItemComponent,
    SectionSeparatorComponent,
    ItemCardComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [FormsModule]
})
export class AppModule { }
