import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Screen213399Component } from './screen213399.component';

@NgModule({
  imports: [
  CommonModule,
RouterModule,
FormsModule,
ReactiveFormsModule,
RouterModule.forChild([
            {path: '', component: Screen213399Component}
          ])
],
  declarations: [
  Screen213399Component
]
  
})
export class Screen213399Module { }