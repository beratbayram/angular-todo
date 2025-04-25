import { Component, inject } from '@angular/core';
import { AccordionModule } from 'primeng/accordion';
import { BaseComponent } from '../components/base.component';
import { TaskListComponent } from '../components/task-list.component';
import { TasksStorageService } from '../services/TasksStorage.service';
import { HeaderComponent } from '../components/header.component';
import { NewTaskComponent } from '../components/new-task.component';
import { AccordionComponent } from '../components/accordion.component';

@Component({
  imports: [
    BaseComponent,
    TaskListComponent,
    AccordionModule,
    HeaderComponent,
    NewTaskComponent,
    AccordionComponent,
  ],
  template: `
    <app-base>
      <app-header>Angular Todo App</app-header>
      <app-task-list
        [tasks]="tasksStorage.getAllCompleted()"
        (tasksChange)="tasksStorage.setAllCompleted($event)"
      ></app-task-list>
      <app-new-task />
      <app-accordion header="Completed Tasks">
        <app-task-list
          [tasks]="tasksStorage.getAllCompleted(true)"
          (tasksChange)="tasksStorage.setAllCompleted($event, true)"
        ></app-task-list>
      </app-accordion>
    </app-base>
  `,
})
export class HomeComponent {
  tasksStorage = inject(TasksStorageService);
}
