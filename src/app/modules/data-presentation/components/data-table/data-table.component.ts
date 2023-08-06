import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Datum } from '../../../../classes/datum.class';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DataTableComponent {
  @Input()
  rows: Datum[] = [];

  trackByFn(index: number, row: Datum): string {
    return row.id;
  }
}
