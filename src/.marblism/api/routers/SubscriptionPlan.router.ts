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

        createMany: procedure.input($Schema.SubscriptionPlanInputSchema.createMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).subscriptionPlan.createMany(input as any))),

        create: procedure.input($Schema.SubscriptionPlanInputSchema.create).mutation(async ({ ctx, input }) => checkMutate(db(ctx).subscriptionPlan.create(input as any))),

        deleteMany: procedure.input($Schema.SubscriptionPlanInputSchema.deleteMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).subscriptionPlan.deleteMany(input as any))),

        delete: procedure.input($Schema.SubscriptionPlanInputSchema.delete).mutation(async ({ ctx, input }) => checkMutate(db(ctx).subscriptionPlan.delete(input as any))),

        findFirst: procedure.input($Schema.SubscriptionPlanInputSchema.findFirst).query(({ ctx, input }) => checkRead(db(ctx).subscriptionPlan.findFirst(input as any))),

        findMany: procedure.input($Schema.SubscriptionPlanInputSchema.findMany).query(({ ctx, input }) => checkRead(db(ctx).subscriptionPlan.findMany(input as any))),

        findUnique: procedure.input($Schema.SubscriptionPlanInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).subscriptionPlan.findUnique(input as any))),

        updateMany: procedure.input($Schema.SubscriptionPlanInputSchema.updateMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).subscriptionPlan.updateMany(input as any))),

        update: procedure.input($Schema.SubscriptionPlanInputSchema.update).mutation(async ({ ctx, input }) => checkMutate(db(ctx).subscriptionPlan.update(input as any))),

    }
    );
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    createMany: {

        useMutation: <T extends Prisma.SubscriptionPlanCreateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.SubscriptionPlanCreateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.SubscriptionPlanCreateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.SubscriptionPlanCreateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    create: {

        useMutation: <T extends Prisma.SubscriptionPlanCreateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.SubscriptionPlanCreateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.SubscriptionPlanGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.SubscriptionPlanGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.SubscriptionPlanCreateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.SubscriptionPlanCreateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.SubscriptionPlanGetPayload<T>, Context>) => Promise<Prisma.SubscriptionPlanGetPayload<T>>
            };

    };
    deleteMany: {

        useMutation: <T extends Prisma.SubscriptionPlanDeleteManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.SubscriptionPlanDeleteManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.SubscriptionPlanDeleteManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.SubscriptionPlanDeleteManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    delete: {

        useMutation: <T extends Prisma.SubscriptionPlanDeleteArgs>(opts?: UseTRPCMutationOptions<
            Prisma.SubscriptionPlanDeleteArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.SubscriptionPlanGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.SubscriptionPlanGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.SubscriptionPlanDeleteArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.SubscriptionPlanDeleteArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.SubscriptionPlanGetPayload<T>, Context>) => Promise<Prisma.SubscriptionPlanGetPayload<T>>
            };

    };
    findFirst: {

        useQuery: <T extends Prisma.SubscriptionPlanFindFirstArgs, TData = Prisma.SubscriptionPlanGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.SubscriptionPlanFindFirstArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.SubscriptionPlanGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.SubscriptionPlanFindFirstArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.SubscriptionPlanFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.SubscriptionPlanGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.SubscriptionPlanGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findMany: {

        useQuery: <T extends Prisma.SubscriptionPlanFindManyArgs, TData = Array<Prisma.SubscriptionPlanGetPayload<T>>>(
            input: Prisma.SelectSubset<T, Prisma.SubscriptionPlanFindManyArgs>,
            opts?: UseTRPCQueryOptions<string, T, Array<Prisma.SubscriptionPlanGetPayload<T>>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.SubscriptionPlanFindManyArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.SubscriptionPlanFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.SubscriptionPlanGetPayload<T>>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Array<Prisma.SubscriptionPlanGetPayload<T>>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findUnique: {

        useQuery: <T extends Prisma.SubscriptionPlanFindUniqueArgs, TData = Prisma.SubscriptionPlanGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.SubscriptionPlanFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.SubscriptionPlanGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.SubscriptionPlanFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.SubscriptionPlanFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.SubscriptionPlanGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.SubscriptionPlanGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    updateMany: {

        useMutation: <T extends Prisma.SubscriptionPlanUpdateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.SubscriptionPlanUpdateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.SubscriptionPlanUpdateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.SubscriptionPlanUpdateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    update: {

        useMutation: <T extends Prisma.SubscriptionPlanUpdateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.SubscriptionPlanUpdateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.SubscriptionPlanGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.SubscriptionPlanGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.SubscriptionPlanUpdateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.SubscriptionPlanUpdateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.SubscriptionPlanGetPayload<T>, Context>) => Promise<Prisma.SubscriptionPlanGetPayload<T>>
            };

    };
}
