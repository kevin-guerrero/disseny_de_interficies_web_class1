import { Component, input, output } from '@angular/core';
import { User } from './user.model';
import { CardComponent } from '../shared/card/card.component';

@Component({
  imports: [CardComponent],
  selector: 'app-user',
  standalone: true,
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