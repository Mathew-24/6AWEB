import { bootstrapApplication } from '@angular/platform-browser';
import { importProvidersFrom } from '@angular/core';
import { AppComponent } from './app/app';

import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(
      ReactiveFormsModule,
      BrowserAnimationsModule,
      MatInputModule,
      MatFormFieldModule,
      MatButtonModule,
      MatSelectModule,
      MatDatepickerModule,
      MatNativeDateModule,
      MatSliderModule,
      MatRadioModule,
      MatCheckboxModule
    )
  ]
}).catch(err => console.error(err));
