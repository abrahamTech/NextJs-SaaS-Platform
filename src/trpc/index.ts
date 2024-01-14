import { publicProcedure, router } from './trpc';

export const appRouter = router({
    test: publicProcedure.query(() => {
        // return new Response(JSON.stringify("Hello"))
        return true
    })
});


export type AppRouter = typeof appRouter;