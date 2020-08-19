import { HttpService, Inject, Injectable, Optional } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { plainToClass } from 'class-transformer';

@Injectable()
export class AbstractEntityService<E, C, U> {
  @Inject(HttpService)
  protected readonly httpSvc: HttpService;

  constructor(
    @Optional() protected readonly baseUrl: string,
    @Optional() protected readonly entityClass: { new () }
  ) {}

  getAll(): Observable<E[]> {
    return this.httpSvc
      .get<{ [key: string]: E }>(`${this.baseUrl}.json`)
      .pipe(
        map((r) =>
          Object.values<E>(r.data).map((u) => plainToClass(this.entityClass, u))
        )
      );
  }

  getById(id: string): Observable<E> {
    return this.httpSvc
      .get<E>(`${this.baseUrl}/${id}.json`)
      .pipe(map((r) => plainToClass(this.entityClass, r.data)));
  }

  create(data: C) {
    return this.httpSvc
      .post<{ name: string }>(`${this.baseUrl}.json`, data)
      .pipe(
        map((r) => r.data),
        switchMap(({ name: id }) =>
          this.httpSvc
            .patch(`${this.baseUrl}/${id}.json`, { id })
            .pipe(map((r) => r.data))
        )
      );
  }

  update(id: string, data: U) {
    return this.httpSvc
      .patch<U>(`${this.baseUrl}/${id}.json`, data)
      .pipe(map((r) => r.data));
  }

  delete(id: string) {
    return this.httpSvc
      .delete(`${this.baseUrl}/${id}.json`)
      .pipe(map((r) => r.data));
  }
}
