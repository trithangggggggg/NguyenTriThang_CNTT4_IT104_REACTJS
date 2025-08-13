enum weekDays {
    Monday = "Thứ Hai",
    Tuesday = "Thứ Ba",
    Wedneday = "Thứ Tư",
    Thursday = "Thứ Năm",
    Friday = "Thứ Sáu",
    Saturday = "Thứ Bảy",
    Sunday = "Chủ Nhật"
}

function printEnumValues<T>(values: T[]): void {
    for (const value of values) {
        console.log(value);
    }
}


printEnumValues<weekDays>([
    weekDays.Monday,
    weekDays.Tuesday,
    weekDays.Wedneday,
    weekDays.Thursday,
    weekDays.Friday,
    weekDays.Saturday,
    weekDays.Sunday
]);



