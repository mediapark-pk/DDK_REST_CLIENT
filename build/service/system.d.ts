import { SystemInfoSchema } from 'ddk.registry/dist/model/common/type';
import { ISystemRepository } from 'src/repository/system';
export declare class SystemService {
    private repository;
    constructor(systemRepository: ISystemRepository);
    onUpdateInfo(info: SystemInfoSchema): void;
}
