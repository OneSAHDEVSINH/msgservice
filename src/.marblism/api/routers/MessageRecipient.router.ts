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

        createMany: procedure.input($Schema.MessageRecipientInputSchema.createMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).messageRecipient.createMany(input as any))),

        create: procedure.input($Schema.MessageRecipientInputSchema.create).mutation(async ({ ctx, input }) => checkMutate(db(ctx).messageRecipient.create(input as any))),

        deleteMany: procedure.input($Schema.MessageRecipientInputSchema.deleteMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).messageRecipient.deleteMany(input as any))),

        delete: procedure.input($Schema.MessageRecipientInputSchema.delete).mutation(async ({ ctx, input }) => checkMutate(db(ctx).messageRecipient.delete(input as any))),

        findFirst: procedure.input($Schema.MessageRecipientInputSchema.findFirst).query(({ ctx, input }) => checkRead(db(ctx).messageRecipient.findFirst(input as any))),

        findMany: procedure.input($Schema.MessageRecipientInputSchema.findMany).query(({ ctx, input }) => checkRead(db(ctx).messageRecipient.findMany(input as any))),

        findUnique: procedure.input($Schema.MessageRecipientInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).messageRecipient.findUnique(input as any))),

        updateMany: procedure.input($Schema.MessageRecipientInputSchema.updateMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).messageRecipient.updateMany(input as any))),

        update: procedure.input($Schema.MessageRecipientInputSchema.update).mutation(async ({ ctx, input }) => checkMutate(db(ctx).messageRecipient.update(input as any))),

    }
    );
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    createMany: {

        useMutation: <T extends Prisma.MessageRecipientCreateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.MessageRecipientCreateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.MessageRecipientCreateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.MessageRecipientCreateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    create: {

        useMutation: <T extends Prisma.MessageRecipientCreateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.MessageRecipientCreateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.MessageRecipientGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.MessageRecipientGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.MessageRecipientCreateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.MessageRecipientCreateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.MessageRecipientGetPayload<T>, Context>) => Promise<Prisma.MessageRecipientGetPayload<T>>
            };

    };
    deleteMany: {

        useMutation: <T extends Prisma.MessageRecipientDeleteManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.MessageRecipientDeleteManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.MessageRecipientDeleteManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.MessageRecipientDeleteManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    delete: {

        useMutation: <T extends Prisma.MessageRecipientDeleteArgs>(opts?: UseTRPCMutationOptions<
            Prisma.MessageRecipientDeleteArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.MessageRecipientGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.MessageRecipientGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.MessageRecipientDeleteArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.MessageRecipientDeleteArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.MessageRecipientGetPayload<T>, Context>) => Promise<Prisma.MessageRecipientGetPayload<T>>
            };

    };
    findFirst: {

        useQuery: <T extends Prisma.MessageRecipientFindFirstArgs, TData = Prisma.MessageRecipientGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.MessageRecipientFindFirstArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.MessageRecipientGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.MessageRecipientFindFirstArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.MessageRecipientFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.MessageRecipientGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.MessageRecipientGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findMany: {

        useQuery: <T extends Prisma.MessageRecipientFindManyArgs, TData = Array<Prisma.MessageRecipientGetPayload<T>>>(
            input: Prisma.SelectSubset<T, Prisma.MessageRecipientFindManyArgs>,
            opts?: UseTRPCQueryOptions<string, T, Array<Prisma.MessageRecipientGetPayload<T>>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.MessageRecipientFindManyArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.MessageRecipientFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.MessageRecipientGetPayload<T>>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Array<Prisma.MessageRecipientGetPayload<T>>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findUnique: {

        useQuery: <T extends Prisma.MessageRecipientFindUniqueArgs, TData = Prisma.MessageRecipientGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.MessageRecipientFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.MessageRecipientGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.MessageRecipientFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.MessageRecipientFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.MessageRecipientGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.MessageRecipientGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    updateMany: {

        useMutation: <T extends Prisma.MessageRecipientUpdateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.MessageRecipientUpdateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.MessageRecipientUpdateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.MessageRecipientUpdateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    update: {

        useMutation: <T extends Prisma.MessageRecipientUpdateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.MessageRecipientUpdateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.MessageRecipientGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.MessageRecipientGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.MessageRecipientUpdateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.MessageRecipientUpdateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.MessageRecipientGetPayload<T>, Context>) => Promise<Prisma.MessageRecipientGetPayload<T>>
            };

    };
}
