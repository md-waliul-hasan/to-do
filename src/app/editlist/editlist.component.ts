import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';
import {switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-editlist',
  templateUrl: './editlist.component.html',
  styleUrls: ['./editlist.component.css']
})
export class EditlistComponent implements OnInit {

    profileForm = new FormGroup({
        todoName: new FormControl(''),
        todoDetails: new FormControl(''),
    });
    todoArray = [];
    todoIndex: any;
    todo: any;
    constructor(private route: ActivatedRoute) {
        const localTodos = JSON.parse( localStorage.getItem('todos'));
        if (!localTodos) {
            localStorage.setItem('todos', JSON.stringify(this.todoArray) );
        } else {
            this.todoArray = localTodos;
        }
    }

    ngOnInit() {
        this.todoIndex = this.route.snapshot.paramMap.get('id');
        this.todoArray.forEach((todo, index) => {
            if (index == this.todoIndex) {
                this.todo = todo;
            }
        });
        this.profileForm.controls['todoName'].setValue(this.todo.todoName);
        this.profileForm.controls['todoDetails'].setValue(this.todo.todoDetails);

        // this.todo.todoName = this.profileForm.value.todoName;
        // this.todo.todoDetails = this.profileForm.value.todoDetails;
        console.log(this.todoArray);
        console.log(this.todoIndex);
        console.log(this.todoArray[Number(this.todoIndex)]);
    }

    submit() {

        this.todoArray[Number(this.todoIndex)]=this.profileForm.value;
        localStorage.setItem('todos', JSON.stringify(this.todoArray));
        console.log(this.todoArray);
    }

}
