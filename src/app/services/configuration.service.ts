import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';
import { ConfigurationResponse } from '../entities/response';

@Injectable({
  providedIn: 'root',
})
export class ConfigurationService {
  private config: ConfigurationResponse | null = null;

  constructor(private http: HttpClient) {}

  loadConfiguration() {
    return this.http
      .get<ConfigurationResponse>('configuration')
      .pipe(tap((config) => (this.config = config)));
  }

  get configuration() {
    return this.config;
  }
}
