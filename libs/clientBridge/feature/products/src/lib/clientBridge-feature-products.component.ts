import {Component, inject} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatCard, MatCardContent, MatCardModule} from '@angular/material/card';
import {ReactiveFormsModule} from '@angular/forms';
import {MatIcon} from '@angular/material/icon';
import {MatIconButton} from '@angular/material/button';
import {CdkDrag, CdkDragDrop, CdkDropList, DragDropModule, moveItemInArray,} from '@angular/cdk/drag-drop';
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef,
  MatHeaderRow,
  MatHeaderRowDef,
  MatRow,
  MatRowDef,
  MatTable,
  MatTableModule,
} from '@angular/material/table';
import {MatPaginator, PageEvent} from '@angular/material/paginator';
import {Router} from '@angular/router';

@Component({
  selector: 'insurance-client-bridge-feature-products',
  imports: [
    MatTableModule,
    DragDropModule,
    MatCardModule,
    CommonModule,
    MatCard,
    MatCardContent,
    ReactiveFormsModule,
    MatIcon,
    MatIconButton,
    MatTable,
    CdkDropList,
    MatColumnDef,
    MatHeaderCell,
    CdkDrag,
    MatCellDef,
    MatCell,
    MatHeaderRow,
    MatRow,
    MatRowDef,
    MatHeaderRowDef,
    MatHeaderCellDef,
    MatPaginator,
  ],
  templateUrl: './clientBridge-feature-products.component.html',
  styleUrl: './clientBridge-feature-products.component.scss',
  standalone: true,
})
export class ClientBridgeFeatureProductsComponent {
  private router = inject(Router)
  length = 50;
  pageSize = 10;
  pageIndex = 0;
  pageSizeOptions = [5, 10, 25];

  columns: string[] = ['customer', 'timeUpdate', 'number', 'Nationalcode', 'actions'];
  dataSource = ELEMENT_DATA;

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.columns, event.previousIndex, event.currentIndex);
  }

  hidePageSize = false;
  showPageSizeOptions = true;
  showFirstLastButtons = true;
  disabled = false;

  pageEvent?: PageEvent;

  handlePageEvent(e: PageEvent) {
    this.pageEvent = e;
    this.length = e.length;
    this.pageSize = e.pageSize;
    this.pageIndex = e.pageIndex;
  }

  setPageSizeOptions(setPageSizeOptionsInput: string) {
    if (setPageSizeOptionsInput) {
      this.pageSizeOptions = setPageSizeOptionsInput
        .split(',')
        .map((str) => +str);
    }
  }

  navigateDetails() {
    this.router.navigate(['/console/user-management/details'])
  }
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 'Jane Cooper', name: '5/30/14', weight: '(207) 555-0119', Nationalcode:'0032179540', symbol: 'H'},
  {position: 'Wade Warren', name: '11/7/16', weight: '(406) 555-0120', Nationalcode :'003547933010',symbol: 'He'},
  {position: 'Robert Fox', name: '3/4/16', weight: '(307) 555-0133' , Nationalcode :'0037403622', symbol: 'Li'},
  {position: 'Force Update', name: '12/10/13', weight: '(505) 555-0125',Nationalcode :'0037560041', symbol: 'Be'},
];

export interface PeriodicElement {
  name: string;
  position: string;
  weight: string;
  Nationalcode: string;
  symbol: string;
}
