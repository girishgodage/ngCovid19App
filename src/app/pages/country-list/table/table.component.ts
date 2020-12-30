import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormatterService } from 'src/app/services/formatter.service';

@Component({
  selector: 'country-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  @Input() list: Array<any>;
  @Input() sortBy: string;
  @Output() notifyOnSort = new EventEmitter<string>();

  constructor(public formatterService: FormatterService) { }

  ngOnInit(): void {
  }

  sortData(sortType) {
    this.notifyOnSort.emit(sortType);
  }


}
