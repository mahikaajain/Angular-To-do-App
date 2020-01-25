import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  @Output() listCreated = new EventEmitter();
  enteredTitle = "";
    enteredContent = "";

  newList="No Content";
 

  onAddList(){
      const list = {title: this.enteredTitle, content: this.enteredContent};
      
      this.listCreated.emit(list);//emiting our own event....
  }
  constructor() { }

  ngOnInit() {
  }

}
