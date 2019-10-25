import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { ActivatedRoute, Router } from '@angular/router';
import {FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-data-student',
  templateUrl: './data-student.component.html',
  styleUrls: ['./data-student.component.scss']
})
export class DataStudentComponent implements OnInit {

  studentsData: Array<any> = [];
  IdStudent: number;
  form: FormGroup;

  constructor(private studentService: StudentService, private activatedRoute: ActivatedRoute,  private router: Router) { 
    this.activatedRoute.params.subscribe(params => {
      this.IdStudent = params.idStudent;
    });
  }

  ngOnInit() {
    this.formInit();
    this.getStudent(this.IdStudent);
  }

  formInit() {
    this.form = new FormGroup({
      name: new FormControl('',Validators.required),
      username: new FormControl('',[Validators.required]),
      email: new FormControl('',[Validators.required, Validators.email]),
      phone: new FormControl('', Validators.required),
      website: new FormControl('',Validators.required)
    });
  }

  getStudent(id: number) {
    this.studentService.getStudent(id).then(s => {
      this.studentsData = s;
      this.form.patchValue(this.studentsData);
    }).catch(error => {
      console.error(error);
    }).finally(() => {

    });
  }

  save() {
    if (this.form.valid) {
      var newdata = this.form.getRawValue();
      console.log(this.studentsData);
      console.log(newdata);
      console.log('salvar');
      this.router.navigate(['../'], {relativeTo: this.activatedRoute});
    }
    else {
      console.log(this.form);
    }
  }

}
