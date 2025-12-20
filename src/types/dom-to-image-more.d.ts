declare module 'dom-to-image-more' {
    interface Options {
        quality?: number;
        bgcolor?: string | null;
        style?: Partial<CSSStyleDeclaration>;
        filter?: (node: Node) => boolean;
        width?: number;
        height?: number;
        cacheBust?: boolean;
    }

    export function toBlob(node: Node, options?: Options): Promise<Blob>;
    export function toPng(node: Node, options?: Options): Promise<string>;
    export function toJpeg(node: Node, options?: Options): Promise<string>;
    export function toSvg(node: Node, options?: Options): Promise<string>;
    export function toPixelData(node: Node, options?: Options): Promise<Uint8ClampedArray>;
}
