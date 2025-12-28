import dayjs from 'dayjs'

//DataBase : UTC+0 UK Time & ISO 8601 (2025-12-28T15:12:00Z)

//LocalDisplay : UTC+8 HK and TW Time (YYYY/MM/DD HH:mm:ss)
const DISPLAYFORMAT = "YYYY/MM/DD HH:mm:ss"

export const timeDisplay = (utcTime:string)=>{
    if(!utcTime){
        return ""
    }
    
    const dateTime = dayjs(utcTime);
    
    if (!dateTime.isValid()) {
        return "";
    }

    return dateTime.format(DISPLAYFORMAT)
}

export const timeToServer = (localTime:string)=>{
    if(!localTime){
        return ""
    }

    const dateTime = dayjs(localTime);
    
    if (!dateTime.isValid()) {
        return "";
    }

    return dateTime.toISOString()
}