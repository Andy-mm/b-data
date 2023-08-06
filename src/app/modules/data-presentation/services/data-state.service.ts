import { Injectable, OnDestroy } from '@angular/core';
import { ReplaySubject, Subject, takeUntil } from 'rxjs';
import { Datum } from '../../../classes/datum.class';
import { MockDataApiService } from './mock-data-api.service';
import { ConnectionParams } from '../../../model/types/connection-params.type';

@Injectable()
export class DataStateService implements OnDestroy {
  data$ = new ReplaySubject<Datum[]>(1);

  private readonly destroy$ = new Subject<void>();

  constructor(
    private readonly dataApiService: MockDataApiService
  ) {
    this.dataApiService.connect();
    this.dataApiService.onmessage()
      .pipe(takeUntil(this.destroy$))
      .subscribe(message => {
        const worker = new Worker(new URL('./app.worker', import.meta.url));

        worker.onmessage = ({ data }) => this.data$.next(data);

        worker.postMessage(message.data);
      })

  }

  setOptions(options: Partial<ConnectionParams>): void {
    this.dataApiService.send(options);
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
