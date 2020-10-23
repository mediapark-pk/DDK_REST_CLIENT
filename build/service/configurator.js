"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("src/config");
const webhook_1 = require("src/service/webhook");
const http_1 = require("src/util/http");
exports.configureWebhooks = (webhookService) => {
    http_1.parseUrls(config_1.ON_APPLY_TRANSACTION).forEach(url => {
        webhookService.subscribe(webhook_1.WebhookAction.APPLY_TRANSACTION, url);
        console.log(`[Configurator][Webhook]: ON_APPLY_TRANSACTION: ${url}`);
    });
    http_1.parseUrls(config_1.ON_APPLY_BLOCK).forEach(url => {
        webhookService.subscribe("APPLY_BLOCK" /* APPLY_BLOCK */, url);
        console.log(`[Configurator][Webhook]: ON_APPLY_BLOCK: ${url}`);
    });
    http_1.parseUrls(config_1.ON_DECLINE_TRANSACTION).forEach(url => {
        webhookService.subscribe("DECLINE_TRANSACTION" /* DECLINE_TRANSACTION */, url);
        console.log(`[Configurator][Webhook]: ON_DECLINE_TRANSACTION: ${url}`);
    });
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlndXJhdG9yLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3NlcnZpY2UvY29uZmlndXJhdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUEsdUNBQTBGO0FBQzFGLGlEQUFpRTtBQUNqRSx3Q0FBMEM7QUFFN0IsUUFBQSxpQkFBaUIsR0FBRyxDQUFDLGNBQWdDLEVBQVEsRUFBRTtJQUN4RSxnQkFBUyxDQUFDLDZCQUFvQixDQUFDLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFO1FBQzFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsdUJBQWEsQ0FBQyxpQkFBaUIsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUMvRCxPQUFPLENBQUMsR0FBRyxDQUFDLGtEQUFrRCxHQUFHLEVBQUUsQ0FBQyxDQUFDO0lBQ3pFLENBQUMsQ0FBQyxDQUFDO0lBRUgsZ0JBQVMsQ0FBQyx1QkFBYyxDQUFDLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFO1FBQ3BDLGNBQWMsQ0FBQyxTQUFTLGtDQUEwQixHQUFHLENBQUMsQ0FBQztRQUN2RCxPQUFPLENBQUMsR0FBRyxDQUFDLDRDQUE0QyxHQUFHLEVBQUUsQ0FBQyxDQUFDO0lBQ25FLENBQUMsQ0FBQyxDQUFDO0lBRUgsZ0JBQVMsQ0FBQywrQkFBc0IsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRTtRQUM1QyxjQUFjLENBQUMsU0FBUyxrREFBa0MsR0FBRyxDQUFDLENBQUM7UUFDL0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxvREFBb0QsR0FBRyxFQUFFLENBQUMsQ0FBQztJQUMzRSxDQUFDLENBQUMsQ0FBQztBQUNQLENBQUMsQ0FBQyJ9