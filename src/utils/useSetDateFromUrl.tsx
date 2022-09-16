import {useEffect} from "react";
import {getCurrentDate} from "../store/dutiesSlice";
import {useParams} from "react-router-dom";
import {useAppDispatch} from "../store/hooks";

export const useSetDateFromUrl = () => {

    const params = useParams()
    const dispatch = useAppDispatch()

    useEffect(() => {

        let month = Number(params.month)
        let year = Number(params.year)
        let day = Number(params.day)

        const date = new Date(year, month, day)

        dispatch(getCurrentDate(date))

    }, [])

};