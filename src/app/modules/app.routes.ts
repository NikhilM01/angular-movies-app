import {NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../components/home/home.component';
import { DetailsComponent } from '../components/details/details.component';
import { SearchComponent } from '../components/search/search.component';
import { ModalComponent } from '../components/modal/modal.component';
import { DetailsActorsComponent } from '../components/details-actors/details-actors.component';
import { DetailsReviewsComponent } from '../components/details-reviews/details-reviews.component';


const routes: Routes = [
    {path:'', component: HomeComponent},
      {path:'home', component: HomeComponent},
      {path:'details/:id', component: DetailsComponent},
      {path:'details/actors/:id', component: DetailsActorsComponent},
      {path:'details/reviews/:id', component: DetailsReviewsComponent},
      {path:'search/movieTitle', component: SearchComponent},
      {path:'trailer', component: ModalComponent},
    //   {path:'feedback', component: feedbac}
]

@NgModule ({
    imports : [ RouterModule.forRoot(routes)],
    exports : [RouterModule]
})


export class AppRoutesModule {

}