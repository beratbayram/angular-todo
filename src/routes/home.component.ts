import { Component, OnInit, signal, WritableSignal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BaseComponent } from '../components/base.component';
import { Task } from '../utils/Task';
import { CheckboxModule } from 'primeng/checkbox';
import { FormsModule } from '@angular/forms';
import { AccordionModule } from 'primeng/accordion';

@Component({
  imports: [
    RouterModule,
    CommonModule,
    FormsModule,
    BaseComponent,
    CheckboxModule,
    AccordionModule,
  ],
  template: `
    <app-base>
      <h1>Angular Todo App</h1>
      <p-accordion [multiple]="true">
        <ul>
          @for(task of tasks(); track task.id) {
          <li>
            <p-accordion-panel value="{{ task.id }}">
              <p-accordion-header>
                <ng-template #toggleicon let-active="active">
                  @if (active) {
                  <span class="pi pi-angle-up"></span>
                  } @else {
                  <span class="pi pi-angle-down"></span>
                  }
                </ng-template>
                <div class="header">
                  <p-checkbox [(ngModel)]="task.completed" [binary]="true" />
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
    </app-base>
  `,
  styles: `
  h1 {
    text-align: center;
    margin-bottom: 20px;
  }

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

  p-checkbox {
    line-height: 1;
  }

  .title {
   vertical-align: middle;

  }
  `,
})
export class HomeComponent implements OnInit {
  tasks: WritableSignal<Task[]> = signal([]);

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
