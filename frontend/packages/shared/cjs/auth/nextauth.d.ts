import { NextApiRequest, NextApiResponse } from "next";
export declare const defaultConfig: {
    debug: boolean;
    useSecureCookies: boolean;
    cookies: {
        sessionToken: {
            name: string;
            options: {
                httpOnly: boolean;
                sameSite: string;
                path: string;
                secure: boolean;
                domain: string;
            };
        };
    };
    secret: string;
    callbacks: {
        redirect({ baseUrl }: {
            baseUrl: string;
        }): Promise<string>;
        jwt({ token, user }: {
            user: Object;
            token: Object;
        }): Promise<Object>;
        session({ session, token }: {
            session?: {} | undefined;
            token?: {} | undefined;
        }): Promise<{}>;
    };
    providers: import("next-auth/providers/credentials").CredentialsConfig<{
        username: {
            label: string;
            type: string;
        };
        password: {
            label: string;
            type: string;
        };
    }>[];
};
declare let authOptions: {
    debug: boolean;
    useSecureCookies: boolean;
    cookies: {
        sessionToken: {
            name: string;
            options: {
                httpOnly: boolean;
                sameSite: string;
                path: string;
                secure: boolean;
                domain: string;
            };
        };
    };
    secret: string;
    callbacks: {
        redirect({ baseUrl }: {
            baseUrl: string;
        }): Promise<string>;
        jwt({ token, user }: {
            user: Object;
            token: Object;
        }): Promise<Object>;
        session({ session, token }: {
            session?: {} | undefined;
            token?: {} | undefined;
        }): Promise<{}>;
    };
    providers: import("next-auth/providers/credentials").CredentialsConfig<{
        username: {
            label: string;
            type: string;
        };
        password: {
            label: string;
            type: string;
        };
    }>[];
};
export declare const McfeAuth: ({ callbacks }?: {
    callbacks?: {} | undefined;
}) => (req: NextApiRequest, res: NextApiResponse) => Promise<any>;
export { authOptions };
//# sourceMappingURL=nextauth.d.ts.map