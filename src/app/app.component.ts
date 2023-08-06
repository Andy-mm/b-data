import { Component } from '@angular/core';
import { ConnectionParams } from './model/types/connection-params.type';
import { MockDataApiService } from './modules/data-presentation/services/mock-data-api.service';
import { map, Subject } from 'rxjs';
import { Datum } from './classes/datum.class';
import { DataStateService } from './modules/data-presentation/services/data-state.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DataStateService, MockDataApiService]
})
export class AppComponent {
  data$: Subject<Datum[]>  = this.dataSource.data$;

  constructor(
    private readonly dataSource: DataStateService
  ) {}

  sendMessage(params: Partial<ConnectionParams>): void {
    // this.dataSource.send(params);
  }
}

