"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Node {
    constructor(socket) {
        this.blockchain = {
            height: 0,
        };
        this.socket = socket;
        this.onApplyBlock = this.onApplyBlock.bind(this);
        this.onUndoBlock = this.onUndoBlock.bind(this);
        this.socket.addCodeListener("APPLY_BLOCK" /* APPLY_BLOCK */, this.onApplyBlock);
        this.socket.addCodeListener("UNDO_BLOCK" /* UNDO_BLOCK */, this.onUndoBlock);
        // FIXME: removeCodeListeners removes all listeners after disconnect
        // but, need remove only specific listeners
        this.socket.on('reconnect', () => {
            this.socket.addCodeListener("APPLY_BLOCK" /* APPLY_BLOCK */, this.onApplyBlock);
            this.socket.addCodeListener("UNDO_BLOCK" /* UNDO_BLOCK */, this.onUndoBlock);
        });
    }
    onApplyBlock(block) {
        this.blockchain.height = block.height;
    }
    onUndoBlock(block) {
        this.blockchain.height = block.height - 1;
    }
    get height() {
        return this.blockchain.height;
    }
    get isConnected() {
        return this.socket.isConnected;
    }
}
exports.Node = Node;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm9kZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tb2RlbC9ub2RlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBV0EsTUFBYSxJQUFJO0lBTWIsWUFBWSxNQUFxRDtRQUM3RCxJQUFJLENBQUMsVUFBVSxHQUFHO1lBQ2QsTUFBTSxFQUFFLENBQUM7U0FDWixDQUFDO1FBQ0YsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFFckIsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNqRCxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRS9DLElBQUksQ0FBQyxNQUFNLENBQUMsZUFBZSxrQ0FBMEIsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ3hFLElBQUksQ0FBQyxNQUFNLENBQUMsZUFBZSxnQ0FBeUIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBRXRFLG9FQUFvRTtRQUNwRSwyQ0FBMkM7UUFDM0MsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsV0FBVyxFQUFFLEdBQUcsRUFBRTtZQUM3QixJQUFJLENBQUMsTUFBTSxDQUFDLGVBQWUsa0NBQTBCLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztZQUN4RSxJQUFJLENBQUMsTUFBTSxDQUFDLGVBQWUsZ0NBQXlCLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUMxRSxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFTyxZQUFZLENBQUMsS0FBWTtRQUM3QixJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDO0lBQzFDLENBQUM7SUFFTyxXQUFXLENBQUMsS0FBWTtRQUM1QixJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztJQUM5QyxDQUFDO0lBRUQsSUFBSSxNQUFNO1FBQ04sT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQztJQUNsQyxDQUFDO0lBRUQsSUFBSSxXQUFXO1FBQ1gsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQztJQUNuQyxDQUFDO0NBQ0o7QUF6Q0Qsb0JBeUNDIn0=