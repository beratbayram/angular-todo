import {
  Component,
  computed,
  OnInit,
  signal,
  WritableSignal,
} from '@angular/core';
import { BaseComponent } from '../components/base.component';
import { TaskListComponent } from '../components/task-list.component';
import { Task } from '../utils/Task';
import { AccordionModule } from 'primeng/accordion';

@Component({
  imports: [BaseComponent, TaskListComponent, AccordionModule],
  template: `
    <app-base>
      <h1>Angular Todo App</h1>
      <app-task-list [(tasks)]="tasks"></app-task-list>
      <p-accordion value="0">
        <p-accordion-panel value="0">
          <p-accordion-header>Completed Tasks</p-accordion-header>
          <p-accordion-content>
            <app-task-list
              [(tasks)]="tasks"
              [isCompleted]="true"
            ></app-task-list>
          </p-accordion-content>
        </p-accordion-panel>
      </p-accordion>
      {{ debugTasks() }}
    </app-base>
  `,
  styles: `
  h1 {
    text-align: center;
    margin-bottom: 20px;
  }
  `,
})
export class HomeComponent implements OnInit {
  tasks: WritableSignal<Task[]> = signal<Task[]>([]);

  debugTasks = computed(() => {
    return JSON.stringify(this.tasks(), null, 2);
  });

  ngOnInit() {
    // Simulate fetching tasks from a service
    const fetchedTasks: Task[] = [
      {
        id: 1,
        title: 'Task 1',
        description: 'Description for Task 1',
        completed: false,
        createdAt: new Date(),
        updatedAt: new Date(),
        dueDate: new Date(),
        urgent: true,
      },
      {
        id: 2,
        title: 'Task 2',
        description: 'Description for Task 2',
        completed: true,
        createdAt: new Date(),
        updatedAt: new Date(),
        dueDate: new Date(),
        urgent: false,
      },
      {
        id: 3,
        title: 'Task 3',
        description: 'Description for Task 3',
        completed: false,
        createdAt: new Date(),
        updatedAt: new Date(),
        dueDate: new Date(),
        urgent: true,
      },
      {
        id: 4,
        title: 'Task 4',
        description: 'Description for Task 4',
        completed: true,
        createdAt: new Date(),
        updatedAt: new Date(),
        dueDate: new Date(),
        urgent: false,
      },
    ];

    this.tasks.set(fetchedTasks);
  }
}
