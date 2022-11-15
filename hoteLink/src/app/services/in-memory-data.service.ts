import { Injectable } from '@angular/core';
import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';
import { Observable } from 'rxjs';
import { news } from './in-memory-data-sources/news';
import { images } from './in-memory-data-sources/images';
import { registeredUsers } from './in-memory-data-sources/users';
import { Hotels } from './in-memory-data-sources/hotels';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService extends InMemoryDbService {
  createDb() {
    return {
      news,
      images,
      registeredUsers,
      Hotels
    };
  }
}
