import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng2TelInputModule } from 'ng2-tel-input';
import { ImageCropperModule } from 'ngx-image-cropper';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { DirectivesModule } from 'src/app/directives/directives.module';
import { AngularSvgIconModule } from 'angular-svg-icon';

import { ComponentsModule } from 'src/app/components/components.module';
import { CompletePasswordUserPotentialComponent } from 'src/app/pages/complete-password-user-potential/complete-password-user-potential.component';

@NgModule({
  declarations: [
    CompletePasswordUserPotentialComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    PipesModule,
    FormsModule,
    NgbModule,
    ImageCropperModule,
    ReactiveFormsModule,
    DirectivesModule,
    Ng2TelInputModule,
    NgxSkeletonLoaderModule,
    RouterModule.forChild([{
      path: '',
      component: CompletePasswordUserPotentialComponent
    }]),
    AngularSvgIconModule.forRoot(),
  ]
})

export class CompletePasswordUserPotentialModule { }
