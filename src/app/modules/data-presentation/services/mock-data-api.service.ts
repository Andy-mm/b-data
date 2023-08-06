import { Injectable } from '@angular/core';
import { Observable, Subject, takeUntil } from 'rxjs';
import { WsMessage } from '../model/interfaces/ws-message.interface';
import { ConnectionParams } from '../../../model/types/connection-params.type';
import { MockDataGeneratorService } from '../../../services/mock-data-generator.service';
import { DataApiService } from '../model/interfaces/data-api-service.interface';

@Injectable()
export class MockDataApiService implements DataApiService {
  private pseudoSocket = new Subject<WsMessage>();
  private wsConnectionClose = new Subject<void>();

  private timerSize: number = 1000;
  private dataSize: number = 10;
  private additionalIds: string[] = [];

  private timer?: NodeJS.Timer;

  constructor(
    private readonly dataGeneratorService: MockDataGeneratorService,
  ) {
  }

  connect(): void {
    this.startGenerateData();
  }

  onmessage(): Observable<WsMessage> {
     return this.pseudoSocket.asObservable().pipe(
      takeUntil(this.wsConnectionClose)
    )
  }

  send(connectionParams: Partial<ConnectionParams>): void {
    if (connectionParams.timerInterval) this.timerSize = connectionParams.timerInterval;
    if (connectionParams.dataArraySize) this.dataSize = connectionParams.dataArraySize;
    if (connectionParams.additionalIds) this.additionalIds = connectionParams.additionalIds;
  }

  disconnect(): void {
    this.wsConnectionClose.next();
    clearTimeout(this.timer);
  }

  private startGenerateData(): void {
    this.timer = setTimeout(
      () => {
        this.pseudoSocket.next({
          data: {
            records: this.dataGeneratorService.generateData(this.dataSize),
            trackedRecords: this.dataGeneratorService.generateData(this.additionalIds.length)
              .map((datum, index) => ({ ...datum, id: this.additionalIds[index] }))
          },
          status: 'success'
        });
        this.startGenerateData();
      },
      this.timerSize
    )
  }
}
