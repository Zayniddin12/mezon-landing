export interface IOffer {
    id?: number;
    title?: string;
    desc?: {
        id: number;
        descTitle: string;
    }[]
}