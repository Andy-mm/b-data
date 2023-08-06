import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DataPresentationModule } from './modules/data-presentation/data-presentation.module';
import {
    ConnectionParamsManagerComponent
} from './components/connection-params-manager/connection-params-manager.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TrackingBlockComponent } from './components/tracking-block/tracking-block.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    DataPresentationModule,
    ConnectionParamsManagerComponent,
    ReactiveFormsModule,
    TrackingBlockComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
