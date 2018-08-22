import { NgModule } from '@angular/core';
import { MatToolbarModule, MatFormFieldModule, MatInputModule, MatButtonModule,
  MatMenuModule, MatIconModule, MatDividerModule, MatSelectModule } from '@angular/material';

@NgModule({
  imports: [MatToolbarModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatMenuModule,
    MatIconModule, MatDividerModule, MatSelectModule],
  exports: [MatToolbarModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatMenuModule,
    MatIconModule, MatDividerModule, MatSelectModule]
})
export class MaterialModule { }
