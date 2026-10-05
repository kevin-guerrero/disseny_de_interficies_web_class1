import { Component, input, output } from '@angular/core';
import { User } from './user.model';

@Component({
  imports: [],
  selector: 'app-user',
  styleUrl: './user.component.css',
  templateUrl: './user.component.html',
})
export class UserComponent {
    public user = input.required<User>();
    public select = output<string>();
    public selectd = input.required<boolean>()

    get imagePath() {
        return '/users/' + this.user().avatar
    }

    onSelectUser(){
        this.select.emit(this.user().id)
    }


}