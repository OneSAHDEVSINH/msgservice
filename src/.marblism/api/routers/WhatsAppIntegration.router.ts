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

        createMany: procedure.input($Schema.WhatsAppIntegrationInputSchema.createMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).whatsAppIntegration.createMany(input as any))),

        create: procedure.input($Schema.WhatsAppIntegrationInputSchema.create).mutation(async ({ ctx, input }) => checkMutate(db(ctx).whatsAppIntegration.create(input as any))),

        deleteMany: procedure.input($Schema.WhatsAppIntegrationInputSchema.deleteMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).whatsAppIntegration.deleteMany(input as any))),

        delete: procedure.input($Schema.WhatsAppIntegrationInputSchema.delete).mutation(async ({ ctx, input }) => checkMutate(db(ctx).whatsAppIntegration.delete(input as any))),

        findFirst: procedure.input($Schema.WhatsAppIntegrationInputSchema.findFirst).query(({ ctx, input }) => checkRead(db(ctx).whatsAppIntegration.findFirst(input as any))),

        findMany: procedure.input($Schema.WhatsAppIntegrationInputSchema.findMany).query(({ ctx, input }) => checkRead(db(ctx).whatsAppIntegration.findMany(input as any))),

        findUnique: procedure.input($Schema.WhatsAppIntegrationInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).whatsAppIntegration.findUnique(input as any))),

        updateMany: procedure.input($Schema.WhatsAppIntegrationInputSchema.updateMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).whatsAppIntegration.updateMany(input as any))),

        update: procedure.input($Schema.WhatsAppIntegrationInputSchema.update).mutation(async ({ ctx, input }) => checkMutate(db(ctx).whatsAppIntegration.update(input as any))),

    }
    );
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    createMany: {

        useMutation: <T extends Prisma.WhatsAppIntegrationCreateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.WhatsAppIntegrationCreateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.WhatsAppIntegrationCreateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.WhatsAppIntegrationCreateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    create: {

        useMutation: <T extends Prisma.WhatsAppIntegrationCreateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.WhatsAppIntegrationCreateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.WhatsAppIntegrationGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.WhatsAppIntegrationGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.WhatsAppIntegrationCreateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.WhatsAppIntegrationCreateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.WhatsAppIntegrationGetPayload<T>, Context>) => Promise<Prisma.WhatsAppIntegrationGetPayload<T>>
            };

    };
    deleteMany: {

        useMutation: <T extends Prisma.WhatsAppIntegrationDeleteManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.WhatsAppIntegrationDeleteManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.WhatsAppIntegrationDeleteManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.WhatsAppIntegrationDeleteManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    delete: {

        useMutation: <T extends Prisma.WhatsAppIntegrationDeleteArgs>(opts?: UseTRPCMutationOptions<
            Prisma.WhatsAppIntegrationDeleteArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.WhatsAppIntegrationGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.WhatsAppIntegrationGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.WhatsAppIntegrationDeleteArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.WhatsAppIntegrationDeleteArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.WhatsAppIntegrationGetPayload<T>, Context>) => Promise<Prisma.WhatsAppIntegrationGetPayload<T>>
            };

    };
    findFirst: {

        useQuery: <T extends Prisma.WhatsAppIntegrationFindFirstArgs, TData = Prisma.WhatsAppIntegrationGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.WhatsAppIntegrationFindFirstArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.WhatsAppIntegrationGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.WhatsAppIntegrationFindFirstArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.WhatsAppIntegrationFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.WhatsAppIntegrationGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.WhatsAppIntegrationGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findMany: {

        useQuery: <T extends Prisma.WhatsAppIntegrationFindManyArgs, TData = Array<Prisma.WhatsAppIntegrationGetPayload<T>>>(
            input: Prisma.SelectSubset<T, Prisma.WhatsAppIntegrationFindManyArgs>,
            opts?: UseTRPCQueryOptions<string, T, Array<Prisma.WhatsAppIntegrationGetPayload<T>>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.WhatsAppIntegrationFindManyArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.WhatsAppIntegrationFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.WhatsAppIntegrationGetPayload<T>>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Array<Prisma.WhatsAppIntegrationGetPayload<T>>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findUnique: {

        useQuery: <T extends Prisma.WhatsAppIntegrationFindUniqueArgs, TData = Prisma.WhatsAppIntegrationGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.WhatsAppIntegrationFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.WhatsAppIntegrationGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.WhatsAppIntegrationFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.WhatsAppIntegrationFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.WhatsAppIntegrationGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.WhatsAppIntegrationGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    updateMany: {

        useMutation: <T extends Prisma.WhatsAppIntegrationUpdateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.WhatsAppIntegrationUpdateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.WhatsAppIntegrationUpdateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.WhatsAppIntegrationUpdateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    update: {

        useMutation: <T extends Prisma.WhatsAppIntegrationUpdateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.WhatsAppIntegrationUpdateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.WhatsAppIntegrationGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.WhatsAppIntegrationGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.WhatsAppIntegrationUpdateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.WhatsAppIntegrationUpdateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.WhatsAppIntegrationGetPayload<T>, Context>) => Promise<Prisma.WhatsAppIntegrationGetPayload<T>>
            };

    };
}
