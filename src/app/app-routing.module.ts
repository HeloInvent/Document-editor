import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditorComponent } from './core/editor/editor.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'Editor' },
  {
    path: 'Editor',
    component: EditorComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
