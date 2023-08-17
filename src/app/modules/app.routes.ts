import {NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../components/home/home.component';
import { DetailsComponent } from '../components/details/details.component';
import { SearchComponent } from '../components/search/search.component';
import { ModalComponent } from '../components/modal/modal.component';


const routes: Routes = [
    {path:'', component: HomeComponent},
      {path:'home', component: HomeComponent},
      {path:'details', component: DetailsComponent},
      {path:'search', component: SearchComponent},
      {path:'trailer', component: ModalComponent},
    //   {path:'feedback', component: feedbac}
]

@NgModule ({
    imports : [ RouterModule.forRoot(routes)],
    exports : [RouterModule]
})


export class AppRoutesModule {

}