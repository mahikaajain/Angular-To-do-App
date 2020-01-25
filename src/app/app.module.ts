import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CreateComponent } from './ToDoApp/create/create.component';
import { DisplayComponent } from './ToDoApp/display/display.component';
import {MatInputModule,MatCardModule,MatButtonModule,MatToolbarModule,MatExpansionModule} from '@angular/material';
import {FormsModule} from '@angular/forms';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateComponent,
    DisplayComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,FormsModule,
    MatInputModule,MatCardModule,MatButtonModule,MatToolbarModule,MatExpansionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
