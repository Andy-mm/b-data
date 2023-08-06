import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ConnectionParams } from '../../model/types/connection-params.type';

@Component({
  selector: 'app-connection-params-manager',
  templateUrl: './connection-params-manager.component.html',
  styleUrls: ['./connection-params-manager.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ConnectionParamsManagerComponent {
  @Output()
  optionsChanged = new EventEmitter<Partial<ConnectionParams>>();

  dataArraySize: number = 10;

  timerIntervalSize: number = 3000;

  submitOptions(): void {
    this.optionsChanged.next({ dataArraySize: this.dataArraySize, timerInterval: this.timerIntervalSize });
  }
}
