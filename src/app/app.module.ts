import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PersonalizadoPipe } from './pipes/personalizado.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PersonalizadoPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
