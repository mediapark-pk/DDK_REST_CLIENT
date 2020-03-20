import { SystemInfoSchema } from 'ddk.registry/dist/model/common/type';
export interface ISystemRepository {
    getInfo(): SystemInfoSchema;
    updateInfo(info: SystemInfoSchema): void;
}
export declare class SystemRepository implements ISystemRepository {
    info: SystemInfoSchema;
    constructor();
    getInfo(): SystemInfoSchema;
    updateInfo(info: SystemInfoSchema): void;
}
