import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ToDoApp';
  storedLists=[];

  onListAdded(list: any){
    this.storedLists.push(list);
}
}
