import { HttpService, Injectable } from '@nestjs/common';
import { UserDto } from '../../common/dto/user.dto';
import { map, switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { plainToClass } from 'class-transformer';
import { CreateUserDto } from '../../common/dto/create-user.dto';
import { UpdateUserDto } from '../../common/dto/update-user.dto';

@Injectable()
export class UserService {
  private readonly baseUrl = 'https://bml-user.firebaseio.com/users';

  constructor(private readonly httpSvc: HttpService) {}

  getAll(): Observable<UserDto[]> {
    return this.httpSvc
      .get<{ [key: string]: UserDto }>(`${this.baseUrl}.json`)
      .pipe(
        map(
          (r) => Object.values<UserDto>(r.data),
          map((userArray: UserDto[]) =>
            userArray.map((u) => plainToClass(UserDto, u))
          )
        )
      );
  }

  getById(id: string): Observable<UserDto> {
    return this.httpSvc
      .get<UserDto>(`${this.baseUrl}/${id}.json`)
      .pipe(map((r) => plainToClass(UserDto, r.data)));
  }

  create(data: CreateUserDto) {
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

  update(id: string, data: UpdateUserDto) {
    return this.httpSvc
      .patch<UpdateUserDto>(`${this.baseUrl}/${id}.json`, data)
      .pipe(map((r) => r.data));
  }

  delete(id: string) {
    return this.httpSvc
      .delete(`${this.baseUrl}/${id}.json`)
      .pipe(map((r) => r.data));
  }
}
