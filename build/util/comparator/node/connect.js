"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class NodeConnectComparator {
    compare(a, b) {
        if (!a.isConnected && b.isConnected) {
            return 1;
        }
        if (a.isConnected && !b.isConnected) {
            return -1;
        }
        return 0;
    }
}
exports.NodeConnectComparator = NodeConnectComparator;
exports.nodeConnectComparator = new NodeConnectComparator();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29ubmVjdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy91dGlsL2NvbXBhcmF0b3Ivbm9kZS9jb25uZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBR0EsTUFBYSxxQkFBcUI7SUFDOUIsT0FBTyxDQUFDLENBQVEsRUFBRSxDQUFRO1FBQ3RCLElBQUksQ0FBQyxDQUFDLENBQUMsV0FBVyxJQUFJLENBQUMsQ0FBQyxXQUFXLEVBQUU7WUFDakMsT0FBTyxDQUFDLENBQUM7U0FDWjtRQUNELElBQUksQ0FBQyxDQUFDLFdBQVcsSUFBSSxDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUU7WUFDakMsT0FBTyxDQUFDLENBQUMsQ0FBQztTQUNiO1FBQ0QsT0FBTyxDQUFDLENBQUM7SUFDYixDQUFDO0NBQ0o7QUFWRCxzREFVQztBQUVZLFFBQUEscUJBQXFCLEdBQUcsSUFBSSxxQkFBcUIsRUFBRSxDQUFDIn0=