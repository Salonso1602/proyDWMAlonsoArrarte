import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

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
import { ModalLoginComponent } from './Components/modals/modal-login/modal-login.component';
import { ModalFiltersComponent } from './Components/modals/modal-filters/modal-filters.component';
import { BookableDetailsComponent } from './Components/news/bookable-details/bookable-details.component';
import { NewsListComponent } from './Components/news/news-list/news-list.component';
import { MoreInfoCardComponent } from './Components/moreInfo/more-info-card/more-info-card.component';
import { MoreInfoDetailsComponent } from './Components/moreInfo/more-info-details/more-info-details.component';
import { BookingComponent } from './Components/booking/booking.component';
import { EventBookingDetailComponent } from './Components/booking/event-booking-detail/event-booking-detail.component';
import { BookingCalendarComponent } from './Components/booking/booking-calendar/booking-calendar.component';
import { ActivityBookingDetailComponent } from '@components/booking/activity-booking-detail/activity-booking-detail.component';
import { ResponseDateTransformInterceptor } from './interceptors/response-date-transform.interceptor';
import { DayNamePipe } from './pipes/day-name.pipe';
import { BookingFormComponent } from './Components/booking/booking-form/booking-form.component';
import { RequestServicesComponent } from './Components/request-services/request-services.component';
import { RestaurantComponent } from './Components/restaurant/restaurant.component';
import { SearchFilterComponent } from './Components/search/search-filter/search-filter.component';
import { SearchResultsComponent } from './Components/search/search-results/search-results.component';
import { SearchComponent } from '@components/search/search.component';
import { SearchFilterTextComponent } from './Components/search/search-filter/search-filter-text/search-filter-text.component';
import { SearchFilterCategoriesComponent } from './Components/search/search-filter/search-filter-categories/search-filter-categories.component';
import { BookablesListComponent } from './Components/booking/bookables-list/bookables-list.component';
import { BookableTypePipe } from './pipes/bookable-type.pipe';
import { IdTokenInterceptor } from './interceptors/id-token.interceptor';
import { HotelPersistanceInterceptor } from './interceptors/hotel-persistance';
import { SelectHotelComponent } from './Components/select-hotel/select-hotel.component';
import { NeedsSelectedHotel } from './guards/needs-selected-hotel.service';
import { ModalSendQuestionComponent } from './Components/modals/modal-send-question/modal-send-question.component';

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
    ModalLoginComponent,
    ModalFiltersComponent,
    BookableDetailsComponent,
    NewsListComponent,
    MoreInfoCardComponent,
    MoreInfoDetailsComponent,
    BookingComponent,
    EventBookingDetailComponent,
    ActivityBookingDetailComponent,
    BookingCalendarComponent,
    DayNamePipe,
    BookingFormComponent,
    RequestServicesComponent,
    RestaurantComponent,
    SearchComponent,
    SearchFilterComponent,
    SearchResultsComponent,
    SearchFilterTextComponent,
    SearchFilterCategoriesComponent,
    BookablesListComponent,
    BookableTypePipe,
    SelectHotelComponent,
    ModalSendQuestionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ResponseDateTransformInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: IdTokenInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HotelPersistanceInterceptor,
      multi: true
    },
    NeedsSelectedHotel
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
