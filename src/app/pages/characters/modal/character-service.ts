import {inject, Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {ICharacterFilter, ICharacterResponse} from './character.model';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class CharacterService {
  resourceBaseUrl = 'https://api.potterdb.com/v1/characters'

  http = inject(HttpClient)

  //metdo para invocar

  getCharacters(filter: ICharacterFilter): Observable<ICharacterResponse> {
    const params = this.convertOptionsParams(filter);
    return this.http.get<ICharacterResponse>(this.resourceBaseUrl, { params });
  }


  private convertOptionsParams(filter: ICharacterFilter) {
    let params = new HttpParams();
    if (filter.name_cont) params = params.set('filter[name_cont]',filter.name_cont);
    if (filter.nationality_eq) params = params.set('filter[nationality_eq]',filter.nationality_eq);
    if (filter.blood_status_cont) params = params.set('filter[blood_status_cont]',filter.blood_status_cont);
    if (filter.house_eq) params = params.set('filter[house_eq]',filter.house_eq);
    return params;

  }
}
