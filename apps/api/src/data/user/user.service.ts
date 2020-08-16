import { HttpService, Injectable } from '@nestjs/common';
import { UserDto } from '../../common/dto/user.dto';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { plainToClass } from 'class-transformer';

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

  getById(userId: string): Observable<UserDto> {
    return this.httpSvc
      .get<UserDto>(`${this.baseUrl}/${userId}.json`)
      .pipe(map((r) => plainToClass(UserDto, r.data)));
  }
}
