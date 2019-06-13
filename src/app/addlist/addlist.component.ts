import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, ValidatorFn, Validators} from '@angular/forms';

@Component({
    selector: 'app-addlist',
    templateUrl: './addlist.component.html',
    styleUrls: ['./addlist.component.css']
})
export class AddlistComponent implements OnInit {

    profileForm = new FormGroup({
        todoName: new FormControl('', [Validators.required, emailValidator()]),
        todoDetails: new FormControl(''),
    });
    todoArray = [];

    constructor() {
    }


    ngOnInit() {
        const localTodos = JSON.parse( localStorage.getItem('todos'));
        if (!localTodos) {
            localStorage.setItem('todos', JSON.stringify(this.todoArray) );
        }else{
            this.todoArray = localTodos;
        }
    }

    submit() {
        this.todoArray.push(this.profileForm.value);
        localStorage.setItem('todos', JSON.stringify(this.todoArray));
        console.log(this.todoArray);
    }
}

export function emailValidator(): ValidatorFn {
    var EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]+\.[a-z0-9]{2,4}$/i;
    return (control: AbstractControl): {[key: string]: any} | null => {
        const invalid = EMAIL_REGEXP.test(control.value);
        return invalid ? {'validEmail': {value: control.value}} : null;
    };
}
