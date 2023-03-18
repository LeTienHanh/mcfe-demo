export default function useLoginBiz(): {
    login: (values: {
        username: string;
        password: string;
    }) => Promise<void>;
    loginWaiting: boolean;
};
//# sourceMappingURL=login-biz.d.ts.map