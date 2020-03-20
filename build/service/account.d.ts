import { Account } from 'ddk.registry/dist/model/common/account';
import { ResponseEntity } from 'ddk.registry/dist/model/common/responseEntity';
import { Address, PublicKey } from 'ddk.registry/dist/model/common/type';
export declare class AccountService {
    fetchByAddress(address: Address): Promise<ResponseEntity<Account>>;
    fetchByPublicKey(publicKey: PublicKey): Promise<ResponseEntity<Account>>;
    fetchBySecret(secret: string): Promise<ResponseEntity<Account>>;
}
