import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { ToastrModule } from 'toastr-ng2';

import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { CitySearchComponent } from './shared/components/city-search/city-search.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';

import { CitySearchService } from './shared/services/city-search.service';
import { City } from './shared/City';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    CitySearchComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule, 
    AppRoutingModule,
    ToastrModule.forRoot({positionClass: 'toast-top-center'})
  ],
  providers: [ CitySearchService ],
  bootstrap: [AppComponent]
})

export class AppModule { }
