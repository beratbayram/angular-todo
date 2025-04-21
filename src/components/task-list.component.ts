import { CommonModule } from '@angular/common';
import { Component, model } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AccordionModule } from 'primeng/accordion';
import { CheckboxModule } from 'primeng/checkbox';
import { DividerModule } from 'primeng/divider';
import { Task } from '../utils/Task';
import { ResetLineHeightDirective } from '../directives/reset-line-height';

@Component({
  imports: [
    CheckboxModule,
    AccordionModule,
    FormsModule,
    CommonModule,
    DividerModule,
    ResetLineHeightDirective,
  ],
  selector: 'app-task-list',
  template: `
    <p-divider />
    <p-accordion [multiple]="true">
      <ul>
        @for(task of tasks(); track task.id) {
        <li>
          <p-accordion-panel [value]="task.id">
            <p-accordion-header>
              <ng-template #toggleicon let-active="active">
                @if (active) {
                <span class="pi pi-angle-up"></span>
                } @else {
                <span class="pi pi-angle-down"></span>
                }
              </ng-template>
              <div class="header">
                <p-checkbox
                  appResetLineHeight
                  [(ngModel)]="task.completed"
                  [binary]="true"
                />
                <div class="title">{{ task.title }}</div>
                <span class="pi pi-flag-fill" style="color: red"></span>
              </div>
            </p-accordion-header>
            <p-accordion-content>
              <p>{{ task.description }}</p>
              <p>Due Date: {{ task.dueDate | date }}</p>
              <p>Priority: {{ task.priority }}</p>
            </p-accordion-content>
          </p-accordion-panel>
        </li>
        }
      </ul>
    </p-accordion>
  `,
  styles: `
    ul {
    text-align: left;
    padding: 0;
    margin: 0;
    list-style: none;
  }

  .header {
    display: flex;
    align-items: center;
    gap: 10px;
    justify-content: space-between;
  }

  .p-divider {
    --p-divider-horizontal-margin: 1.125rem 0 0.05rem 0;
  }

  .title {
   vertical-align: middle;
  }
  `,
})
export class TaskListComponent {
  tasks = model<Task[]>([]);
}
