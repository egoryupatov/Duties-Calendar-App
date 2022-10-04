export const getCurrentMonthNameLong = (date:Date):string => {

    return date.toLocaleDateString("en-En", {
        month: "long",
    })

}