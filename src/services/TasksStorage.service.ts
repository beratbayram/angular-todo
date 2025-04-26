import { Injectable } from '@angular/core';
import { Task } from '../utils/Task';

const TASKS_KEY = 'tasks';

@Injectable({
  providedIn: 'root',
})
export class TasksStorageService {
  private latestId = -1;

  private generateId(): number {
    const tasks = this.getAll();
    if (this.latestId !== -1) {
      return this.latestId++;
    }

    if (tasks.length === 0) {
      return (this.latestId = 0);
    } else {
      return (this.latestId = Math.max(...tasks.map((task) => task.id)) + 1);
    }
  }

  getAll(): Task[] {
    const tasks = localStorage.getItem(TASKS_KEY);
    return tasks ? JSON.parse(tasks) : [];
  }

  setAll(tasks: Task[]) {
    localStorage.setItem(TASKS_KEY, JSON.stringify(tasks));
  }

  getAllCompleted(completed = false): Task[] {
    const tasks = this.getAll();
    return structuredClone(
      tasks.filter((task) => task.completed === completed)
    );
  }

  setAllCompleted(tasks: Task[], completed = false): void {
    const otherTasks = this.getAllCompleted(!completed);
    const allTasks = [...otherTasks, ...tasks];
    this.setAll(allTasks);
  }

  add(task: Task): void {
    const tasks = this.getAll();
    task.id = this.generateId();
    tasks.push(task);
    this.setAll(tasks);
  }

  update(task: Task): void {
    const tasks = this.getAll();
    const index = tasks.findIndex((t) => t.id === task.id);
    if (index !== -1) {
      tasks[index] = task;
      this.setAll([...tasks]);
    }
  }

  delete(task: Task): void {
    const tasks = this.getAll();
    const index = tasks.findIndex((t) => t.id === task.id);
    if (index !== -1) {
      tasks.splice(index, 1);
      this.setAll(tasks);
    }
  }

  clear(): void {
    localStorage.removeItem(TASKS_KEY);
  }

  getById(id: number): Task | undefined {
    const tasks = this.getAll();
    return tasks.find((task) => task.id === id);
  }
}
