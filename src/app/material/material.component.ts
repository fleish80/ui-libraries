import { Component, OnInit, ViewChild, AfterContentInit } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource, MatTable } from '@angular/material';
import { MaterialDataSource } from './material-datasource';
import { InformationService, Information, Item } from '../information.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { DataSource } from '@angular/cdk/table';

@Component({
  selector: 'app-material',
  templateUrl: './material.component.html',
  styleUrls: ['./material.component.scss']
})
export class MaterialComponent implements OnInit {

  sort: MatSort;
  @ViewChild(MatSort) set matSort(ms: MatSort) {
    this.sort = ms;
    this.setDataSourceAttributes();
  }

  table: MatTable<Item>;
  @ViewChild(MatTable) set matTable(mt: MatTable<Item>) {
    this.table = mt;
    this.setDataSourceAttributes();
  };
  information$: Observable<any>
  dataSource: MatTableDataSource<Item>;
  columns: string[];

  constructor(private informationService: InformationService) {
  }

  ngOnInit() {
    this.information$ = this.informationService.get().pipe(
      map((information: Information) => {
        const dataSource = new MatTableDataSource<Item>(information.items);
        dataSource.sort = this.sort;
        return {
          columns: information.columns,
          dataSource: new MatTableDataSource<Item>(information.items)
        };
      })
    );
  }

  setDataSourceAttributes() {
    if (this.table && this.sort) {
      (this.table.dataSource as MatTableDataSource<Item>).sort = this.sort;
    }
  }
}
