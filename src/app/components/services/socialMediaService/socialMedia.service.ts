import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class SocialMediaService {

    url = '';

    constructor(
        protected http: HttpClient) {
        this.url = 'myUrl/v1';
    }

    public getSocialMediaData(): Observable<any> {
        return this.http.get(`${this.url}/exampleUrl`);
    }

    public addSocialMediaData(params: any): Observable<any> {
        return this.http.post(`${this.url}/exampleUrl`, params);
    }
}
