export const dateSort = (array: any[], field: string, type: string) => {
    array.sort(function (a: any, b: any) {
        if (type === "asc") return new Date(b[field]).valueOf() - new Date(a[field]).valueOf();
        else return new Date(a[field]).valueOf() - new Date(b[field]).valueOf();
    });

    return array;
};

export const baseSort = (array: any[], field: string, type: string) => {
    array.sort(function (a: any, b: any) {
        if (type === "asc") return a[field] - b[field];
        else return b[field] - a[field];
    });

    return array;
};