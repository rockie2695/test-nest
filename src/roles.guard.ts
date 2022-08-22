import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Observable } from 'rxjs';
import { Reflector } from '@nestjs/core';
// this assume that request.user is contain after middleware
@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}
  canActivate(
    context: ExecutionContext,
  ): boolean /* | Promise<boolean> | Observable<boolean> */ {
    /*console.log('use RolesGuard', context);
    return true;*/
    const roles = this.reflector.get<string[]>('roles', context.getHandler());
    if (!roles) {
      return true;
    }
    const request = context.switchToHttp().getRequest();
    const user = request.user;
    return matchRoles(roles, user.roles);
  }
}
const matchRoles = (roles: string[], userRoles: string[]): boolean => {
  return true;
  //throw new UnauthorizedException();
};
