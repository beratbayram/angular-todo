import { Component, OnInit, inject, signal, OnDestroy } from '@angular/core';
import { AccordionModule } from 'primeng/accordion';
import { AccordionComponent } from '../components/accordion.component';
import { BaseComponent } from '../components/base.component';
import { HeaderComponent } from '../components/header.component';
import { NewTaskComponent } from '../components/new-task.component';
import { TaskListComponent } from '../components/task-list.component';
import { TasksStorageService } from '../services/TasksStorage.service';
import { Task } from '../utils/Task';

const CONSUMER_ID = 'home';

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
      <app-task-list [(tasks)]="tasks"></app-task-list>
      <app-new-task />
      <app-accordion header="Completed Tasks">
        <app-task-list [(tasks)]="tasks" [completed]="true"></app-task-list>
      </app-accordion>
    </app-base>
  `,
})
export class HomeComponent implements OnInit, OnDestroy {
  tasks = signal<Task[]>([]);

  tasksStorage = inject(TasksStorageService);

  ngOnInit() {
    this.tasks.set(this.tasksStorage.getAll());
    this.tasksStorage.subscribe(CONSUMER_ID, this.tasks.set);
  }

  ngOnDestroy() {
    this.tasksStorage.unsubscribe(CONSUMER_ID);
  }
}
