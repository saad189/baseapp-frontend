import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from '../shared/shared.module';
import { NavigationComponent } from './Components/navigation/navigation.component';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { NotfoundComponent } from './Components/notfound/notfound.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HeaderComponent,
    FooterComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
