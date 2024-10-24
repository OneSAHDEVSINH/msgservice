/* eslint-disable */
import { type RouterFactory, type ProcBuilder, type BaseConfig, db } from ".";
import * as _Schema from '@zenstackhq/runtime/zod/input';
const $Schema: typeof _Schema = (_Schema as any).default ?? _Schema;
import { checkRead, checkMutate } from '../helper';
import type { Prisma } from '@prisma/client';
import type { UseTRPCMutationOptions, UseTRPCMutationResult, UseTRPCQueryOptions, UseTRPCQueryResult, UseTRPCInfiniteQueryOptions, UseTRPCInfiniteQueryResult } from '@trpc/react-query/shared';
import type { TRPCClientErrorLike } from '@trpc/client';
import type { AnyRouter } from '@trpc/server';

export default function createRouter<Config extends BaseConfig>(router: RouterFactory<Config>, procedure: ProcBuilder<Config>) {
    return router({

        createMany: procedure.input($Schema.MessageCampaignInputSchema.createMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).messageCampaign.createMany(input as any))),

        create: procedure.input($Schema.MessageCampaignInputSchema.create).mutation(async ({ ctx, input }) => checkMutate(db(ctx).messageCampaign.create(input as any))),

        deleteMany: procedure.input($Schema.MessageCampaignInputSchema.deleteMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).messageCampaign.deleteMany(input as any))),

        delete: procedure.input($Schema.MessageCampaignInputSchema.delete).mutation(async ({ ctx, input }) => checkMutate(db(ctx).messageCampaign.delete(input as any))),

        findFirst: procedure.input($Schema.MessageCampaignInputSchema.findFirst).query(({ ctx, input }) => checkRead(db(ctx).messageCampaign.findFirst(input as any))),

        findMany: procedure.input($Schema.MessageCampaignInputSchema.findMany).query(({ ctx, input }) => checkRead(db(ctx).messageCampaign.findMany(input as any))),

        findUnique: procedure.input($Schema.MessageCampaignInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).messageCampaign.findUnique(input as any))),

        updateMany: procedure.input($Schema.MessageCampaignInputSchema.updateMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).messageCampaign.updateMany(input as any))),

        update: procedure.input($Schema.MessageCampaignInputSchema.update).mutation(async ({ ctx, input }) => checkMutate(db(ctx).messageCampaign.update(input as any))),

    }
    );
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    createMany: {

        useMutation: <T extends Prisma.MessageCampaignCreateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.MessageCampaignCreateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.MessageCampaignCreateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.MessageCampaignCreateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    create: {

        useMutation: <T extends Prisma.MessageCampaignCreateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.MessageCampaignCreateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.MessageCampaignGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.MessageCampaignGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.MessageCampaignCreateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.MessageCampaignCreateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.MessageCampaignGetPayload<T>, Context>) => Promise<Prisma.MessageCampaignGetPayload<T>>
            };

    };
    deleteMany: {

        useMutation: <T extends Prisma.MessageCampaignDeleteManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.MessageCampaignDeleteManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.MessageCampaignDeleteManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.MessageCampaignDeleteManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    delete: {

        useMutation: <T extends Prisma.MessageCampaignDeleteArgs>(opts?: UseTRPCMutationOptions<
            Prisma.MessageCampaignDeleteArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.MessageCampaignGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.MessageCampaignGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.MessageCampaignDeleteArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.MessageCampaignDeleteArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.MessageCampaignGetPayload<T>, Context>) => Promise<Prisma.MessageCampaignGetPayload<T>>
            };

    };
    findFirst: {

        useQuery: <T extends Prisma.MessageCampaignFindFirstArgs, TData = Prisma.MessageCampaignGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.MessageCampaignFindFirstArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.MessageCampaignGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.MessageCampaignFindFirstArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.MessageCampaignFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.MessageCampaignGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.MessageCampaignGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findMany: {

        useQuery: <T extends Prisma.MessageCampaignFindManyArgs, TData = Array<Prisma.MessageCampaignGetPayload<T>>>(
            input: Prisma.SelectSubset<T, Prisma.MessageCampaignFindManyArgs>,
            opts?: UseTRPCQueryOptions<string, T, Array<Prisma.MessageCampaignGetPayload<T>>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.MessageCampaignFindManyArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.MessageCampaignFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.MessageCampaignGetPayload<T>>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Array<Prisma.MessageCampaignGetPayload<T>>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findUnique: {

        useQuery: <T extends Prisma.MessageCampaignFindUniqueArgs, TData = Prisma.MessageCampaignGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.MessageCampaignFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.MessageCampaignGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.MessageCampaignFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.MessageCampaignFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.MessageCampaignGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.MessageCampaignGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    updateMany: {

        useMutation: <T extends Prisma.MessageCampaignUpdateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.MessageCampaignUpdateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.MessageCampaignUpdateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.MessageCampaignUpdateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    update: {

        useMutation: <T extends Prisma.MessageCampaignUpdateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.MessageCampaignUpdateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.MessageCampaignGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.MessageCampaignGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.MessageCampaignUpdateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.MessageCampaignUpdateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.MessageCampaignGetPayload<T>, Context>) => Promise<Prisma.MessageCampaignGetPayload<T>>
            };

    };
}
