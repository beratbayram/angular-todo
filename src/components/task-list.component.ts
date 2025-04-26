import { CommonModule } from '@angular/common';
import { Component, computed, inject, input, model } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { PanelModule } from 'primeng/panel';
import { ResetLineHeightDirective } from '../directives/reset-line-height.directive';
import { TasksStorageService } from '../services/TasksStorage.service';
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
      @for(task of filteredTasks(); track task.id) {
      <li>
        <p-panel [toggleable]="true">
          <ng-template #header>
            <p-checkbox
              appResetLineHeight
              [ngModel]="task.completed"
              (ngModelChange)="handleComplete(task)"
              [binary]="true"
            />
            {{ task.title }}
          </ng-template>

          <ng-template #icons>
            <p-button
              (click)="toggleTaskUrgency(task)"
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
            <div class="footer">
              <p-button
                (click)="handleDelete(task)"
                icon="pi pi-trash"
                rounded
                text
                severity="secondary"
              />
              @if(task.dueDate) {
              <p [ngStyle]="{ color: isLate(task) ? 'red' : 'black' }">
                <span class="pi pi-calendar-clock"></span>
                {{ task.dueDate | date : 'dd/MM/yyyy hh:mm' }}
              </p>
              }
            </div>
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

  .footer {
    display: flex;
    align-items: center;
    gap: 10px;
    justify-content: space-between;
    flex-direction: row-reverse;
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
  today = new Date(); // WHY ???

  completed = input(false);

  tasks = model<Task[]>([]);

  filteredTasks = computed(() => {
    if (this.completed()) {
      return this.tasks().filter((task) => task.completed);
    }
    return this.tasks().filter((task) => !task.completed);
  });

  tasksStorage = inject(TasksStorageService);

  isLate(task: Task): boolean {
    if (!task.dueDate) return false;
    const dueTime = new Date(task.dueDate).getTime?.() ?? Infinity;

    return dueTime < this.today.getTime();
  }

  refreshTaskStorage() {
    this.tasks.set(this.tasksStorage.getAll());
  }

  toggleTaskUrgency(task: Task) {
    task.urgent = !task.urgent;
    this.tasksStorage.update(task);
    this.refreshTaskStorage();
  }

  handleDelete(task: Task) {
    this.tasksStorage.delete(task);
    this.refreshTaskStorage();
  }

  handleComplete(task: Task) {
    task.completed = !task.completed;
    this.tasksStorage.update(task);
    this.refreshTaskStorage();
  }
}
