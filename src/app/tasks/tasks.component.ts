import { Component, input } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-tasks',
  styleUrl: './tasks.component.css',
  templateUrl: './tasks.component.html',
})
export class TasksComponent {
    user = input<String>('user')
    username = input<String>('user')

    tasksList = [
        {
            id: 't1',
            userId: 'u1',
            tittle: 'Master Angular',
            summary: 'Learn all the basic and advanced features of Angular',
            dueDate: '2026-12-31'
        }
    ]

    isSameUser(taskUserId: string): boolean {
        return this.user() === taskUserId;
    }
}