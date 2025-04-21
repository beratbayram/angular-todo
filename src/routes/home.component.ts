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

@Component({
  imports: [BaseComponent, TaskListComponent],
  template: `
    <app-base>
      <h1>Angular Todo App</h1>
      <app-task-list [(tasks)]="tasks"></app-task-list>
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
        priority: 'medium',
      },
      {
        id: 2,
        title: 'Task 2',
        description: 'Description for Task 2',
        completed: true,
        createdAt: new Date(),
        updatedAt: new Date(),
        dueDate: new Date(),
        priority: 'high',
      },
    ];

    this.tasks.set(fetchedTasks);
  }
}
