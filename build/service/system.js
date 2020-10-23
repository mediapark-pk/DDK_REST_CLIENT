"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SystemService {
    constructor(systemRepository) {
        this.repository = systemRepository;
        // TODO: fetch system info when API will be added to core
        this.onUpdateInfo = this.onUpdateInfo.bind(this);
    }
    onUpdateInfo(info) {
        this.repository.updateInfo(info);
    }
}
exports.SystemService = SystemService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3lzdGVtLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3NlcnZpY2Uvc3lzdGVtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBSUEsTUFBYSxhQUFhO0lBR3RCLFlBQ0ksZ0JBQW1DO1FBRW5DLElBQUksQ0FBQyxVQUFVLEdBQUcsZ0JBQWdCLENBQUM7UUFFbkMseURBQXlEO1FBRXpELElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDckQsQ0FBQztJQUVELFlBQVksQ0FBQyxJQUFzQjtRQUMvQixJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNyQyxDQUFDO0NBQ0o7QUFoQkQsc0NBZ0JDIn0=