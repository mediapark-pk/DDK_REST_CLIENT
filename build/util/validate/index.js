"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const validate_1 = __importDefault(require("ddk.registry/dist/util/validate"));
const responseEntity_1 = require("ddk.registry/dist/model/common/responseEntity");
const schemas = __importStar(require("src/util/validate/schema"));
const http_1 = require("src/util/http");
const validator = new validate_1.default({
    noTypeless: true,
    noExtraKeywords: true,
    noEmptyArrays: true,
    noEmptyStrings: true,
});
const isValidSchema = validator.validateSchema(Object.values(schemas));
if (!isValidSchema) {
    throw new Error('Invalid validation schema');
}
exports.validate = (_target, _propertyName, descriptor) => {
    let descriptorFn = descriptor.value || descriptor.get();
    return {
        value: (req, res) => {
            const schemaId = `${req.method} ${req.baseUrl}${req.route.path}`;
            const data = { ...req.params, ...req.query, ...req.body };
            validator.validate(data, schemaId, (errors, isValid) => {
                if (!isValid) {
                    res
                        .status(http_1.HTTP_STATUS.INTERNAL_SERVER_ERROR)
                        .send(new responseEntity_1.ResponseEntity({ errors: [`Invalid arguments`, ...errors.map(err => err.message)] }));
                    return;
                }
                return descriptorFn.call(this, req, res);
            });
        },
    };
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvdXRpbC92YWxpZGF0ZS9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFDQSwrRUFBd0Q7QUFDeEQsa0ZBQStFO0FBRS9FLGtFQUFvRDtBQUNwRCx3Q0FBNEM7QUFFNUMsTUFBTSxTQUFTLEdBQWMsSUFBSSxrQkFBUyxDQUFDO0lBQ3ZDLFVBQVUsRUFBRSxJQUFJO0lBQ2hCLGVBQWUsRUFBRSxJQUFJO0lBQ3JCLGFBQWEsRUFBRSxJQUFJO0lBQ25CLGNBQWMsRUFBRSxJQUFJO0NBQ3ZCLENBQUMsQ0FBQztBQUVILE1BQU0sYUFBYSxHQUFZLFNBQVMsQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO0FBRWhGLElBQUksQ0FBQyxhQUFhLEVBQUU7SUFDaEIsTUFBTSxJQUFJLEtBQUssQ0FBQywyQkFBMkIsQ0FBQyxDQUFDO0NBQ2hEO0FBRVksUUFBQSxRQUFRLEdBQUcsQ0FBQyxPQUFZLEVBQUUsYUFBcUIsRUFBRSxVQUE4QixFQUFFLEVBQUU7SUFDNUYsSUFBSSxZQUFZLEdBQUcsVUFBVSxDQUFDLEtBQUssSUFBSSxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUM7SUFFeEQsT0FBTztRQUNILEtBQUssRUFBRSxDQUFDLEdBQVksRUFBRSxHQUFhLEVBQU8sRUFBRTtZQUN4QyxNQUFNLFFBQVEsR0FBRyxHQUFHLEdBQUcsQ0FBQyxNQUFNLElBQUksR0FBRyxDQUFDLE9BQU8sR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDO1lBQ2pFLE1BQU0sSUFBSSxHQUFHLEVBQUUsR0FBRyxHQUFHLENBQUMsTUFBTSxFQUFFLEdBQUcsR0FBRyxDQUFDLEtBQUssRUFBRSxHQUFHLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUUxRCxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxRQUFRLEVBQUUsQ0FBQyxNQUFvQyxFQUFFLE9BQWdCLEVBQUUsRUFBRTtnQkFDMUYsSUFBSSxDQUFDLE9BQU8sRUFBRTtvQkFDVixHQUFHO3lCQUNFLE1BQU0sQ0FBQyxrQkFBVyxDQUFDLHFCQUFxQixDQUFDO3lCQUN6QyxJQUFJLENBQUMsSUFBSSwrQkFBYyxDQUFDLEVBQUUsTUFBTSxFQUFFLENBQUMsbUJBQW1CLEVBQUUsR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7b0JBQ3BHLE9BQU87aUJBQ1Y7Z0JBQ0QsT0FBTyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFDN0MsQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDO0tBQ0osQ0FBQztBQUNOLENBQUMsQ0FBQyJ9