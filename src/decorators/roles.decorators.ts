import { SetMetadata } from "@nestjs/common";
import { Role } from "src/AuthorizationRBAC/role.atRBAC";

// Decorador usado em AuthorizationRBAC/role.atRBAC.ts
export const Roles = (...roles: Role[]) => SetMetadata('roles', Roles);