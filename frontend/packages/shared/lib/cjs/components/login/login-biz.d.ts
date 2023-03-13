export default function useLoginBiz(): {
    login: (values: {
        email: string;
        password: string;
    }) => Promise<void>;
    loginWaiting: boolean;
};
//# sourceMappingURL=login-biz.d.ts.map