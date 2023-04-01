

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SinglepageComponent } from './singlepage.component';




const routes: Routes = [
    {
        path: '',
        children: [
            { path: 'inicio', component: SinglepageComponent },
            { path: '**', redirectTo: 'inicio' },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class singlepageRoutingModule { }
