"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SystemRepository {
    constructor() {
        this.info = {
            height: 0,
            consensus: 0,
            datetime: new Date(),
            peersCount: 0,
            peers: [],
            broadhash: '',
            version: '',
            transactionsCount: {
                queue: 0,
                conflictedQueue: 0,
                pool: 0,
            },
        };
    }
    getInfo() {
        return this.info;
    }
    updateInfo(info) {
        this.info = info;
    }
}
exports.SystemRepository = SystemRepository;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3lzdGVtLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3JlcG9zaXRvcnkvc3lzdGVtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBUUEsTUFBYSxnQkFBZ0I7SUFHekI7UUFDSSxJQUFJLENBQUMsSUFBSSxHQUFHO1lBQ1IsTUFBTSxFQUFFLENBQUM7WUFDVCxTQUFTLEVBQUUsQ0FBQztZQUNaLFFBQVEsRUFBRSxJQUFJLElBQUksRUFBRTtZQUNwQixVQUFVLEVBQUUsQ0FBQztZQUNiLEtBQUssRUFBRSxFQUFFO1lBQ1QsU0FBUyxFQUFFLEVBQUU7WUFDYixPQUFPLEVBQUUsRUFBRTtZQUNYLGlCQUFpQixFQUFFO2dCQUNmLEtBQUssRUFBRSxDQUFDO2dCQUNSLGVBQWUsRUFBRSxDQUFDO2dCQUNsQixJQUFJLEVBQUUsQ0FBQzthQUNWO1NBQ0osQ0FBQztJQUNOLENBQUM7SUFFRCxPQUFPO1FBQ0gsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQ3JCLENBQUM7SUFFRCxVQUFVLENBQUMsSUFBc0I7UUFDN0IsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7SUFDckIsQ0FBQztDQUNKO0FBM0JELDRDQTJCQyJ9