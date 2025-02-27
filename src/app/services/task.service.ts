import { Injectable } from '@angular/core';

export interface Task {
  id: number;
  title: string;
  description?: string;
  completed: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private tasks: Task[] = [];
  private taskId = 0;

  getTasks(): Task[] {
    return this.tasks;
  }

  addTask(title: string, description?: string) {
    this.tasks.push({ id: this.taskId++, title, description, completed: false });
  }

  toggleComplete(id: number) {
    const task = this.tasks.find(t => t.id === id);
    if (task) task.completed = !task.completed;
  }

  deleteTask(id: number) {
    this.tasks = this.tasks.filter(t => t.id !== id);
  }
}
