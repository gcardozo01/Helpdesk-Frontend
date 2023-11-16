// Angular
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

// Config
import { API_CONFIG } from "../config/api.config";

// Models
import { Chamado } from "../models/chamado";

// RXJS
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class ChamadoService {
  constructor(private http: HttpClient) {}

  findById(id: any): Observable<Chamado> {
    return this.http.get<Chamado>(`${API_CONFIG.baseUrl}/chamados/${id}`);
  }

  findAll(): Observable<Chamado[]> {
    return this.http.get<Chamado[]>(`${API_CONFIG.baseUrl}/chamados`);
  }

  create(chamado: Chamado): Observable<Chamado> {
    return this.http.post<Chamado>(`${API_CONFIG.baseUrl}/chamados`, chamado);
  }

  update(chamado: Chamado): Observable<Chamado> {
    return this.http.put<Chamado>(
      `${API_CONFIG.baseUrl}/chamados/${chamado.id}`,
      chamado
    );
  }
}
