import { Component } from '@angular/core';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
})
export class TaskFormComponent {
  title = '';
  description = '';

  constructor(private taskService: TaskService) {}

  addTask() {
    if (this.title) {
      this.taskService.addTask(this.title, this.description);
      this.title = '';
      this.description = '';
    }
  }
}

