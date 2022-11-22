export interface Fiterer {
    title?: string;
    comment?: string;
    date?: RangeType<string>;
    amount?: RangeType<number>;
    category?: string;
    subcategory?: string;
}

type RangeType<type> = [type | undefined, type | undefined];
