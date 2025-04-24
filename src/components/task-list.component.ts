import { CommonModule } from '@angular/common';
import { Component, model } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { PanelModule } from 'primeng/panel';
import { ResetLineHeightDirective } from '../directives/reset-line-height.directive';
import { Task } from '../utils/Task';

@Component({
  imports: [
    CheckboxModule,
    FormsModule,
    CommonModule,
    ResetLineHeightDirective,
    ButtonModule,
    PanelModule,
  ],
  selector: 'app-task-list',
  template: `
    <ul>
      @for(task of tasks(); track task.id) {
      <li>
        <p-panel [toggleable]="true">

          <ng-template #header>
            <p-checkbox
              appResetLineHeight
              [(ngModel)]="task.completed"
              (ngModelChange)="refreshModel()"
              [binary]="true"
            />
            {{ task.title }}
          </ng-template>

          <ng-template #icons>
            <p-button
              (click)="handleUrgentChange(task)"
              icon="pi pi-flag-fill"
              rounded
              text
              [severity]="task.urgent ? 'danger' : null"
            />
          </ng-template>

          <ng-template #content>
            <p>{{ task.description }}</p>
          </ng-template>

          <ng-template #footer>
            <p>Due Date: {{ task.dueDate | date }}</p>
          </ng-template>
        </p-panel>
      </li>
      }
    </ul>
  `,
  styles: `
  ul {
    text-align: left;
    padding: 0;
    margin: 0;
    list-style: none;
  }

  li {
    padding-bottom: 1rem;
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
  `,
})
export class TaskListComponent {
  tasks = model<Task[]>([], {});

  refreshModel() {
    this.tasks.update(structuredClone);
  }

  protected handleUrgentChange(task: Task) {
    task.urgent = !task.urgent;
    this.refreshModel();
  }
}
