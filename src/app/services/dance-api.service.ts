import { Injectable } from '@angular/core';
import { HttpClient, HttpParams  } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import DanceDetails from '../models/dancedetails.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DanceApiService {

  private serverURL = environment.serverUrl
  private baseUrl = '/api/dances/';
  private searchUrl = '/api/search';
  private selectedDanceSubject: BehaviorSubject<DanceDetails>;
  private selectedDance: DanceDetails;


  constructor(private http: HttpClient) { 
    this.selectedDance = null;
    this.selectedDanceSubject = new BehaviorSubject<DanceDetails>(this.selectedDance);
  }

  // Read all dance records
  getAllDances(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl);
  }

  // Read a specific dance record by ID
  getDanceById(id: string): Observable<any> {
    const url = `${this.serverURL}${id}`;
    return this.http.get<any>(url);
  }

  getDanceStepsByID(DanceID): Observable<any> {
    const url = this.serverURL  + "/api/steps/" + DanceID
    return this.http.get<any>(url);
  }

  getRandomDance(): Observable<DanceDetails>{
    let url = this.serverURL + "/api/random-dance"
    return this.http.get<any>(url);
  }

  generateObjectId(): string {
    let counterOne = Math.floor(Math.random() * 0xffffff);
    const pid = Math.floor(Math.random() * 0xffff).toString(16).padStart(4, '0');
    const machine = Math.floor(Math.random() * 0xffffff).toString(16).padStart(6, '0');
    
    const timestamp = Math.floor(Date.now() / 1000).toString(16).padStart(8, '0');
    const counter = (counterOne = (counterOne + 1) % 0xffffff).toString(16).padStart(6, '0');
    return timestamp + machine + pid + counter;
  }

  sendEmail(newDance: DanceDetails){
    let url = this.serverURL + "/api/send-email" 
    return this.http.post(url, newDance).subscribe();
  }

  searchDancesByName(query: string): Observable<DanceDetails[]> {
    let url = this.serverURL + this.searchUrl + "?term=" + query
    return this.http.get<any>(url);
  }

  setActiveDance(danceToBeSelected: DanceDetails){
    let tempDanceID = danceToBeSelected.DanceID
    let tempId = danceToBeSelected._id

    delete danceToBeSelected.DanceID
    delete danceToBeSelected._id

    localStorage.setItem("SelectedDance", JSON.stringify(danceToBeSelected))
    
    this.selectedDance = danceToBeSelected;
    this.selectedDance.DanceID = tempDanceID
    this.selectedDance._id = tempId
    
    this.selectedDanceSubject.next(danceToBeSelected);  
  }

  clearActiveDance(){
    this.selectedDance = null;
    this.selectedDanceSubject.next(null);  
  }

  getActiveDance() : Observable<DanceDetails>{
    return this.selectedDanceSubject.asObservable();
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

  // Create a new dance record
  //   createDance(danceData: any): Observable<any> {
  //     return this.http.post<any>(this.baseUrl, danceData);
  //   }
}
