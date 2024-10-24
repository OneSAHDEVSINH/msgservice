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

        createMany: procedure.input($Schema.TemplatePurchaseInputSchema.createMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).templatePurchase.createMany(input as any))),

        create: procedure.input($Schema.TemplatePurchaseInputSchema.create).mutation(async ({ ctx, input }) => checkMutate(db(ctx).templatePurchase.create(input as any))),

        deleteMany: procedure.input($Schema.TemplatePurchaseInputSchema.deleteMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).templatePurchase.deleteMany(input as any))),

        delete: procedure.input($Schema.TemplatePurchaseInputSchema.delete).mutation(async ({ ctx, input }) => checkMutate(db(ctx).templatePurchase.delete(input as any))),

        findFirst: procedure.input($Schema.TemplatePurchaseInputSchema.findFirst).query(({ ctx, input }) => checkRead(db(ctx).templatePurchase.findFirst(input as any))),

        findMany: procedure.input($Schema.TemplatePurchaseInputSchema.findMany).query(({ ctx, input }) => checkRead(db(ctx).templatePurchase.findMany(input as any))),

        findUnique: procedure.input($Schema.TemplatePurchaseInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).templatePurchase.findUnique(input as any))),

        updateMany: procedure.input($Schema.TemplatePurchaseInputSchema.updateMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).templatePurchase.updateMany(input as any))),

        update: procedure.input($Schema.TemplatePurchaseInputSchema.update).mutation(async ({ ctx, input }) => checkMutate(db(ctx).templatePurchase.update(input as any))),

    }
    );
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    createMany: {

        useMutation: <T extends Prisma.TemplatePurchaseCreateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.TemplatePurchaseCreateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.TemplatePurchaseCreateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.TemplatePurchaseCreateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    create: {

        useMutation: <T extends Prisma.TemplatePurchaseCreateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.TemplatePurchaseCreateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.TemplatePurchaseGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.TemplatePurchaseGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.TemplatePurchaseCreateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.TemplatePurchaseCreateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.TemplatePurchaseGetPayload<T>, Context>) => Promise<Prisma.TemplatePurchaseGetPayload<T>>
            };

    };
    deleteMany: {

        useMutation: <T extends Prisma.TemplatePurchaseDeleteManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.TemplatePurchaseDeleteManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.TemplatePurchaseDeleteManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.TemplatePurchaseDeleteManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    delete: {

        useMutation: <T extends Prisma.TemplatePurchaseDeleteArgs>(opts?: UseTRPCMutationOptions<
            Prisma.TemplatePurchaseDeleteArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.TemplatePurchaseGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.TemplatePurchaseGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.TemplatePurchaseDeleteArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.TemplatePurchaseDeleteArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.TemplatePurchaseGetPayload<T>, Context>) => Promise<Prisma.TemplatePurchaseGetPayload<T>>
            };

    };
    findFirst: {

        useQuery: <T extends Prisma.TemplatePurchaseFindFirstArgs, TData = Prisma.TemplatePurchaseGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.TemplatePurchaseFindFirstArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.TemplatePurchaseGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.TemplatePurchaseFindFirstArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.TemplatePurchaseFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.TemplatePurchaseGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.TemplatePurchaseGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findMany: {

        useQuery: <T extends Prisma.TemplatePurchaseFindManyArgs, TData = Array<Prisma.TemplatePurchaseGetPayload<T>>>(
            input: Prisma.SelectSubset<T, Prisma.TemplatePurchaseFindManyArgs>,
            opts?: UseTRPCQueryOptions<string, T, Array<Prisma.TemplatePurchaseGetPayload<T>>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.TemplatePurchaseFindManyArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.TemplatePurchaseFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.TemplatePurchaseGetPayload<T>>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Array<Prisma.TemplatePurchaseGetPayload<T>>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findUnique: {

        useQuery: <T extends Prisma.TemplatePurchaseFindUniqueArgs, TData = Prisma.TemplatePurchaseGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.TemplatePurchaseFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.TemplatePurchaseGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.TemplatePurchaseFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.TemplatePurchaseFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.TemplatePurchaseGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.TemplatePurchaseGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    updateMany: {

        useMutation: <T extends Prisma.TemplatePurchaseUpdateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.TemplatePurchaseUpdateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.TemplatePurchaseUpdateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.TemplatePurchaseUpdateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    update: {

        useMutation: <T extends Prisma.TemplatePurchaseUpdateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.TemplatePurchaseUpdateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.TemplatePurchaseGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.TemplatePurchaseGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.TemplatePurchaseUpdateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.TemplatePurchaseUpdateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.TemplatePurchaseGetPayload<T>, Context>) => Promise<Prisma.TemplatePurchaseGetPayload<T>>
            };

    };
}
