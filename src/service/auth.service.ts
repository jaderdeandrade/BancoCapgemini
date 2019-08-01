import { Injectable } from "@angular/core";
import { BancoDTO } from "../models/banco.dto";
import { HttpClient } from "@angular/common/http";
import { API_CONFIG } from "../config/api.config";


@Injectable()
export class AuthService{

    constructor(public http: HttpClient){

    }

    operacaoBancaria(bancs : BancoDTO) {
         return this.http.put(
            `${API_CONFIG.baseUrl}/${bancs.id}`, 
            bancs,
            {
                observe: 'response',
                responseType: 'text'
                }
                
            );
            
    }

 

}