import { Injectable } from '@angular/core';
import { HttpClient, HttpParams  } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DanceApiService {

  private serverURL = "http://localhost:3000" 
  private baseUrl = '/api/dances/';
  private searchUrl = '/api/search/';

  constructor(private http: HttpClient) { }

  // Create a new dance record
//   createDance(danceData: any): Observable<any> {
//     return this.http.post<any>(this.baseUrl, danceData);
//   }

  // Read all dance records
  getAllDances(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl);
  }

  // Read a specific dance record by ID
  getDanceById(id: string): Observable<any> {
    const url = `${this.serverURL}${id}`;
    return this.http.get<any>(url);
  }

  //todo: here
  searchDancesByName(query: string): Observable<any[]> {
    const params = new HttpParams().set('term', query); // Adjust 'name' to your API's query parameter
    return this.http.get<any[]>(`${this.serverURL}${this.searchUrl}`, { params });
  }

//   // Update a dance record
//   updateDance(id: string, danceData: any): Observable<any> {
//     const url = `${this.baseUrl}${id}`;
//     return this.http.put<any>(url, danceData);
//   }

//   // Delete a dance record
//   deleteDance(id: string): Observable<any> {
//     const url = `${this.baseUrl}${id}`;
//     return this.http.delete<any>(url);
//   }
}
