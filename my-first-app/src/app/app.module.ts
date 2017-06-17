import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { WarningAlertComponent } from './warning-alert/warning-alert.component';
import { SuccessAlertComponent } from './success-alert/success-alert.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdButtonModule, MdCardModule, MdMenuModule, MdToolbarModule, MdIconModule } from '@angular/material';
import { MdInputModule, MdGridListModule, MdTooltipModule, MdSnackBarModule, MdSlideToggleModule } from '@angular/material';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { ImageComponent } from './image/image.component';
import { UsernameComponent } from './username/username.component';


@NgModule({
  declarations: [
    AppComponent,
    WarningAlertComponent,
    SuccessAlertComponent,
    ServerComponent,
    ServersComponent,
    ToolbarComponent,
    ImageComponent,
    UsernameComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    BrowserAnimationsModule,
    MdButtonModule,
    MdCardModule,
    MdMenuModule,
    MdToolbarModule,
    MdIconModule,
    MdInputModule,
    MdGridListModule,
    MdTooltipModule,
    MdSnackBarModule,
    MdSlideToggleModule
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
