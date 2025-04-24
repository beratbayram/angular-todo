import { Component, inject } from '@angular/core';
import { AccordionModule } from 'primeng/accordion';
import { BaseComponent } from '../components/base.component';
import { TaskListComponent } from '../components/task-list.component';
import { TasksStorageService } from '../services/TasksStorage.service';
import { HeaderComponent } from '../components/header.component';

@Component({
  imports: [BaseComponent, TaskListComponent, AccordionModule, HeaderComponent],
  template: `
    <app-base>
      <app-header>Angular Todo App</app-header>
      <app-task-list
        [tasks]="tasksStorage.getAllCompleted()"
        (tasksChange)="tasksStorage.setAllCompleted($event)"
      ></app-task-list>
      <p-accordion value="0">
        <p-accordion-panel value="0">
          <p-accordion-header>Completed Tasks</p-accordion-header>
          <p-accordion-content>
            <app-task-list
              [tasks]="tasksStorage.getAllCompleted(true)"
              (tasksChange)="tasksStorage.setAllCompleted($event, true)"
            ></app-task-list>
          </p-accordion-content>
        </p-accordion-panel>
      </p-accordion>
    </app-base>
  `,
})
export class HomeComponent {
  tasksStorage = inject(TasksStorageService);
}
