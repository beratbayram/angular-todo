import { Task } from './Task';

class TaskRegistry {
  private latestTaskId = 0;
  private ids = new Set<number>();

  #toKey(id: number) {
    return `task-${id}`;
  }

  add(task: Partial<Task>): Task {
    const id = this.latestTaskId++;
    this.ids.add(id);

    const newTask: Task = {
      id,
      title: task.title ?? '',
      description: task.description ?? '',
      completed: task.completed ?? false,
      createdAt: task.createdAt ?? new Date(),
      updatedAt: task.updatedAt ?? new Date(),
      dueDate: task.dueDate ?? new Date(),
      priority: task.priority ?? 'medium',
    };

    localStorage.setItem(this.#toKey(id), JSON.stringify(newTask));
    return newTask;
  }

  remove(id: number): boolean {
    const taskExists = localStorage.getItem(this.#toKey(id)) !== null;
    if (taskExists) {
      localStorage.removeItem(this.#toKey(id));
      this.ids.delete(id);
      return true;
    }
    return false;
  }

  get(id: number): Task | null {
    const task = localStorage.getItem(this.#toKey(id));
    return task ? JSON.parse(task) : null;
  }

  update(id: number, updatedTask: Partial<Task>): Task {
    const task = this.get(id);

    if (!task) throw new Error(`Task with id ${id} not found`);

    const updated = { ...task, ...updatedTask };
    localStorage.setItem(this.#toKey(id), JSON.stringify(updated));
    return updated;
  }

  getAll(): Task[] {
    const tasks: Task[] = [];
    for (const id of this.ids) {
      const task = localStorage.getItem(this.#toKey(id));
      if (task) {
        tasks.push(JSON.parse(task));
      }
    }
    return tasks;
  }

  clear(): void {
    for (const id of this.ids) {
      localStorage.removeItem(this.#toKey(id));
    }
    this.ids.clear();
    this.latestTaskId = 0;
  }
}

export const taskRegistry = new TaskRegistry();
