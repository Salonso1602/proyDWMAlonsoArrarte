import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { ModalBaseComponent } from '@components/modals/modal-base/modal-base.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ImageComponent } from './Components/image/image.component';
import { NewsCardComponent } from './Components/news/news-card/news-card.component';
import { FooterComponent } from './Components/footer/footer.component';
import { ModalSendRequestComponent } from './Components/modals/modal-send-request/modal-send-request.component';
import { ModalToggleButtonComponent } from '@components/modals/modal-toggle-button/modal-toggle-button.component';
import { SearchAndFilterComponent } from './Components/search-and-filter/search-and-filter.component';
import { ModalLoginComponent } from './Components/modals/modal-login/modal-login.component';
import { ModalFiltersComponent } from './Components/modals/modal-filters/modal-filters.component';
import { NewsDetailsComponent } from './Components/news/news-details/news-details.component';
import { InMemoryDataService } from '@services/in-memory-data.service';
import { NewsListComponent } from './Components/news/news-list/news-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ImageComponent,
    NewsCardComponent,
    FooterComponent,
    ModalToggleButtonComponent,
    ModalBaseComponent,
    ModalSendRequestComponent,
    SearchAndFilterComponent,
    ModalLoginComponent,
    ModalFiltersComponent,
    NewsDetailsComponent,
    NewsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {dataEncapsulation: false})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
