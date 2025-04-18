/* eslint-disable */
import type { unsetMarker, AnyRouter, AnyRootConfig, CreateRouterInner, Procedure, ProcedureBuilder, ProcedureParams, ProcedureRouterRecord, ProcedureType } from "@trpc/server";
import type { PrismaClient } from "@prisma/client";
import createTemplateRouter from "./Template.router";
import createTemplatePurchaseRouter from "./TemplatePurchase.router";
import createMessageCampaignRouter from "./MessageCampaign.router";
import createMessageRecipientRouter from "./MessageRecipient.router";
import createWhatsAppIntegrationRouter from "./WhatsAppIntegration.router";
import createSubscriptionPlanRouter from "./SubscriptionPlan.router";
import createOrganizationRouter from "./Organization.router";
import createOrganizationRoleRouter from "./OrganizationRole.router";
import createUserRouter from "./User.router";
import createPushNotificationRouter from "./PushNotification.router";
import createAccountRouter from "./Account.router";
import createRagVectorRouter from "./RagVector.router";
import createSessionRouter from "./Session.router";
import { ClientType as TemplateClientType } from "./Template.router";
import { ClientType as TemplatePurchaseClientType } from "./TemplatePurchase.router";
import { ClientType as MessageCampaignClientType } from "./MessageCampaign.router";
import { ClientType as MessageRecipientClientType } from "./MessageRecipient.router";
import { ClientType as WhatsAppIntegrationClientType } from "./WhatsAppIntegration.router";
import { ClientType as SubscriptionPlanClientType } from "./SubscriptionPlan.router";
import { ClientType as OrganizationClientType } from "./Organization.router";
import { ClientType as OrganizationRoleClientType } from "./OrganizationRole.router";
import { ClientType as UserClientType } from "./User.router";
import { ClientType as PushNotificationClientType } from "./PushNotification.router";
import { ClientType as AccountClientType } from "./Account.router";
import { ClientType as RagVectorClientType } from "./RagVector.router";
import { ClientType as SessionClientType } from "./Session.router";

export type BaseConfig = AnyRootConfig;

export type RouterFactory<Config extends BaseConfig> = <
    ProcRouterRecord extends ProcedureRouterRecord
>(
    procedures: ProcRouterRecord
) => CreateRouterInner<Config, ProcRouterRecord>;

export type UnsetMarker = typeof unsetMarker;

export type ProcBuilder<Config extends BaseConfig> = ProcedureBuilder<
    ProcedureParams<Config, any, any, any, UnsetMarker, UnsetMarker, any>
>;

export function db(ctx: any) {
    if (!ctx.prisma) {
        throw new Error('Missing "prisma" field in trpc context');
    }
    return ctx.prisma as PrismaClient;
}

export function createRouter<Config extends BaseConfig>(router: RouterFactory<Config>, procedure: ProcBuilder<Config>) {
    return router({
        template: createTemplateRouter(router, procedure),
        templatePurchase: createTemplatePurchaseRouter(router, procedure),
        messageCampaign: createMessageCampaignRouter(router, procedure),
        messageRecipient: createMessageRecipientRouter(router, procedure),
        whatsAppIntegration: createWhatsAppIntegrationRouter(router, procedure),
        subscriptionPlan: createSubscriptionPlanRouter(router, procedure),
        organization: createOrganizationRouter(router, procedure),
        organizationRole: createOrganizationRoleRouter(router, procedure),
        user: createUserRouter(router, procedure),
        pushNotification: createPushNotificationRouter(router, procedure),
        account: createAccountRouter(router, procedure),
        ragVector: createRagVectorRouter(router, procedure),
        session: createSessionRouter(router, procedure),
    }
    );
}

export interface ClientType<AppRouter extends AnyRouter> {
    template: TemplateClientType<AppRouter>;
    templatePurchase: TemplatePurchaseClientType<AppRouter>;
    messageCampaign: MessageCampaignClientType<AppRouter>;
    messageRecipient: MessageRecipientClientType<AppRouter>;
    whatsAppIntegration: WhatsAppIntegrationClientType<AppRouter>;
    subscriptionPlan: SubscriptionPlanClientType<AppRouter>;
    organization: OrganizationClientType<AppRouter>;
    organizationRole: OrganizationRoleClientType<AppRouter>;
    user: UserClientType<AppRouter>;
    pushNotification: PushNotificationClientType<AppRouter>;
    account: AccountClientType<AppRouter>;
    ragVector: RagVectorClientType<AppRouter>;
    session: SessionClientType<AppRouter>;
}
