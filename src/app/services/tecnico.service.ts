import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

// Config
import { API_CONFIG } from "../config/api.config";

// Models
import { Tecnico } from "../models/tecnicos";

@Injectable({
  providedIn: "root",
})
export class TecnicoService {
  constructor(private http: HttpClient) {}

  findAll(): Observable<Tecnico[]> {
    return this.http.get<Tecnico[]>(`${API_CONFIG.baseUrl}/tecnicos`);
  }
}
