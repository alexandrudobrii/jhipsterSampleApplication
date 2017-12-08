import { BaseEntity } from './../../shared';

export class EmployeeMySuffix implements BaseEntity {
    constructor(
        public id?: number,
        public firstName?: string,
        public lastName?: string,
        public hireDate?: any,
        public salary?: number,
        public jobs?: BaseEntity[],
    ) {
    }
}
