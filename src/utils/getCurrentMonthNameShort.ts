export const getCurrentMonthNameShort = (date:Date):string => {

    return date.toLocaleDateString("en-En", {
        month: "short",
    })

}
