import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_URL } from 'src/utils/http-client/httpClientSetup';
import { LoginModel } from '../models/login.model';
import { UserModel } from '../models/user.model';

//TODO: 
// 1. Cambiar la implementación de JSON SERVER a la de la API

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private endpoint: string = '/users';
  public user: UserModel = {
    username: '',
    token: '',
  };

  constructor(private _httpClient: HttpClient) {}

  public signIn(login: LoginModel): Observable<UserModel[]> {
    
      //Implementación usando JSON SERVER, un paquete que crea una db rapidisimo para pruebas en front end

      //-------------------------------------------------------------------------------------------------
      
        const url = `${API_URL + this.endpoint}?username=${login.username}&password=${login.password}`;
        const body = {};
        const headers = {};

        return this._httpClient.get<UserModel[]>(url); 
      
      //-------------------------------------------------------------------------------------------------

      /* Implementacion posible con el endpoint de la api
      
      //La url dirigida al endpoint de login
      //API_URL: Es la url base de la api, puede modificarse en la carpeta utils/http-client
      //endpoint: es la parte de la url que indica a que endpoint apuntamos
      const url = `${API_URL + this.endpoint}`;
      
      //El body que mandaremos con la peticion
      const body = {
        username: login.username,
        password: login.password
      };
      
      //El objeto opciones con los headers
      const options = {
        headers: {
          'Content-type': 'application/json'
        }
      };

      return this._httpClient.post<UserModel>(url, body, options); */
    
  }
}
