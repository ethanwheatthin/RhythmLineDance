import { Injectable } from '@angular/core';
import { HttpClient, HttpParams  } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import DanceDetails from '../models/dancedetails.model';

@Injectable({
  providedIn: 'root'
})
export class DanceApiService {

  private serverURL = "http://localhost:3000" 
  private baseUrl = '/api/dances/';
  private searchUrl = '/api/search';

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

  searchDancesByName(query: string): Observable<DanceDetails[]> {
    // const params = new HttpParams().set('term', query); // Adjust 'name' to your API's query parameter
    let url = this.serverURL + this.searchUrl + "?term=" + query
    console.log("🚀 ~ DanceApiService ~ searchDancesByName ~ url:", url)
    return this.http.get<any>(url);
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
