import { Component, input } from '@angular/core';
import { TASK_LIST } from '../task-list';

@Component({
  imports: [],
  selector: 'app-tasks',
  styleUrl: './tasks.component.css',
  templateUrl: './tasks.component.html',
})
export class TasksComponent {
    userId = input<String | undefined>()
    username = input<String>('user')

    public tasksList = TASK_LIST;

    isSameUser(taskUserId: string): boolean {
      return this.userId() === taskUserId;
    }
}