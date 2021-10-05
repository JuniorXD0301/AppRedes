import { Injectable } from "@angular/core";
import {HttpClient} from "@angular/common/http";
import { Modal } from "./modal";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/first';
import 'rxjs/add/operator/catch';
import { Observable } from "rxjs";
import { $ } from "protractor";


@Injectable()
export class ModalService{

    private url = 'http://localhost:8000/producto';

    constructor(private http: HttpClient) { }

    getProducto(): Observable<Modal[]> {
        let url = `${this.url}`;
        return this.http.get(url)
                    .map(r => r.json())
                    .catch(this.handleError);

    }

    private handleError(error: Response | any){
        let errMsg: string;
        if(error instanceof Response){
            let body = error.json() || '',
            let err = body.error || JSON.stringify(body);
            errMsg = `${error.status}- ${error.statusText || ''} ${err}`;
            } else{
                errMsg = error.message ? error.message : error.toString();
            }
            return Observable.throw(errMsg);
    }

    }
}