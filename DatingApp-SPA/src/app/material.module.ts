import { NgModule } from '@angular/core';
import { MatToolbarModule, MatFormFieldModule, MatInputModule, MatButtonModule,
  MatMenuModule, MatIconModule, MatDividerModule, MatSelectModule, MatSnackBarModule } from '@angular/material';

@NgModule({
  imports: [MatToolbarModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatMenuModule,
    MatIconModule, MatDividerModule, MatSelectModule, MatSnackBarModule],
  exports: [MatToolbarModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatMenuModule,
    MatIconModule, MatDividerModule, MatSelectModule, MatSnackBarModule]
})
export class MaterialModule { }
