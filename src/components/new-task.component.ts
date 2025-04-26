import { Component } from '@angular/core';
import { RippleModule } from 'primeng/ripple';
import { DialogModule } from 'primeng/dialog';
import { EditTaskComponent } from './edit-task.component';

@Component({
  imports: [RippleModule, DialogModule, EditTaskComponent],
  selector: 'app-new-task',
  template: `
    <button class="container" pRipple (click)="openDialog()">
      <div class="pi pi-plus"></div>
    </button>
    <p-dialog
      header="New Task"
      [modal]="true"
      [(visible)]="visible"
      [style]="DIALOG_STYLE"
    >
      <app-edit-task />
    </p-dialog>
  `,
  styles: `
  .container {
    transition: background-color 0.3s;
    background-color: #fff;
    width: 100%;
    height: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px dashed #ccc;
    border-radius: var(--p-border-radius-md);

    &:hover {
      background-color: #f0f0f0;
      cursor: pointer;
    }
  }

  `,
})
export class NewTaskComponent {
  DIALOG_STYLE = { width: '25rem' };

  visible = false;

  openDialog() {
    this.visible = true;
  }
}
