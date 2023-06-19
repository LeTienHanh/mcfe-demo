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
    title?: String;
}
export declare function OneHeader({ links, title }: HeaderSearchProps): JSX.Element;
export {};
//# sourceMappingURL=one-header.d.ts.map