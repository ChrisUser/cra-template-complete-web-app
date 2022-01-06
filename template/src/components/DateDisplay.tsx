import moment from 'moment'
import React, { useEffect, useState } from 'react'

const DateDisplay: React.FC = () => {
    const [date, setDate] = useState('')

    /**
     * On component render sets the date state to current date and time
     */
    useEffect(() => {
        setDate(moment.utc().toString())
    }, [])

    return (
        <div style={{ position: 'relative', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
            <span style={{ color: 'orange' }}>{date}</span>
        </div>
    )
}

export default DateDisplay
