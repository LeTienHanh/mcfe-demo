/// <reference types="react" />
interface HeaderSearchProps {
    links: {
        link?: string;
        label: string;
        links?: {
            link: string;
            label: string;
        }[];
    }[];
}
export declare function OneHeader({ links }: HeaderSearchProps): JSX.Element;
export {};
//# sourceMappingURL=one-header.d.ts.map