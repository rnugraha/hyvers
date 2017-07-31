import { Injectable } from '@angular/core';
import { Hyver } from './hyver';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class HyverService {

    private hyversUrl = 'api/hyvers';

    constructor(private http: Http) {
    }

    getHyversAsPromise(): Promise<Hyver[]> {
        return this.http.get(this.hyversUrl)
            .toPromise()
            .then(response => response.json().data as Hyver[])
            .catch(this.handleError);

    }

    getHyver(id: number): Promise<Hyver> {
        const url = `${this.hyversUrl}/${id}`;
        return this.http.get(url)
            .toPromise()
            .then(response => response.json().data as Hyver)
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}
