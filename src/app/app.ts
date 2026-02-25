import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { CommonModule } from '@angular/common';

// Angular Material modules
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSliderModule } from '@angular/material/slider';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSliderModule,
    MatRadioModule,
    MatCheckboxModule
  ],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent {
  form!: FormGroup;
  submitted = false;
  result: any;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      username: [''],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      gender: ['male'],
      address: [''],
      birthDate: ['', Validators.required],
      skillLevel: [5],
      country: [''],
      subscription: ['free'],
      terms: [false, Validators.requiredTrue]
    });
  }

  onSubmit() {
    this.submitted = true;
    this.result = this.form.value;
  }
}
