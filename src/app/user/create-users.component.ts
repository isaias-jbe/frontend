import { Component } from "@angular/core";
import { UsersService } from "./users.service";
import { User } from "./user";

@Component({
  selector: "app-create-user",
  templateUrl: "./create-users.component.html",
  providers: [UsersService]
})
export class UsersComponent {
  users: User[];
  editUser: User;

  constructor(private usersService: UsersService) {}

  addUser(name: string): void {
    this.editUser = undefined;
    name = name.trim();
    if (!name) {
      return;
    }

    const newUser: User = { name } as User;
    this.usersService.addUser(newUser).subscribe(user => this.users.push(user));
  }
}
