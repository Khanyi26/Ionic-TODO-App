import { Component } from '@angular/core';
import { TaskService, Task } from '../../services/task.service';
import { MatListModule } from '@angular/material/list';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule, MatListModule, MatCheckboxModule, MatIconModule],
  templateUrl: './task-list.component.html',
})
export class TaskListComponent {
  tasks: Task[];

  constructor(private taskService: TaskService) {
    this.tasks = this.taskService.getTasks();
  }

  toggleComplete(id: number) {
    this.taskService.toggleComplete(id);
  }

  deleteTask(id: number) {
    this.taskService.deleteTask(id);
  }
}

