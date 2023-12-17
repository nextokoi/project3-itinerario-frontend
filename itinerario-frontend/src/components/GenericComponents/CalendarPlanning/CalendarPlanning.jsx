import dayjs from 'dayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
/* import { DatePicker } from '@mui/x-date-pickers/DatePicker'; */
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import PropTypes from 'prop-types'
// import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
// import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import { useState } from 'react';
import { getDateCalendarUtilityClass, getMonthCalendarUtilityClass } from '@mui/x-date-pickers';

export default function ResponsiveDatePickers({ labelText, changeFunction }) {

    const handleOnChange = async (value) => {

        const timeChain = value.toISOString();
        const dateTimeUTC = new Date(timeChain);
        
        const date = `${dateTimeUTC.getFullYear()}-${dateTimeUTC.getMonth() + 1}-${dateTimeUTC.getDate()}`

        await changeFunction(date)
    }

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer
                components={[
                    // 'DatePicker',
                    // 'MobileDatePicker',
                    // 'Ida',
                    // 'StaticDatePicker',
                ]}
            >

                <DemoItem label={labelText}>
                    <DesktopDatePicker defaultValue={dayjs('2023-12-16')} onChange={handleOnChange} />
                </DemoItem>

                {/* <DemoItem label="Mobile variant">
                    <MobileDatePicker defaultValue={dayjs('2022-04-17')} />
                </DemoItem>
                <DemoItem label="Responsive variant">
                    <DatePicker defaultValue={dayjs('2022-04-17')} />
                </DemoItem>
                <DemoItem label="Static variant">
                    <StaticDatePicker defaultValue={dayjs('2022-04-17')} />
                </DemoItem> */}

            </DemoContainer>
        </LocalizationProvider>
    );
}

ResponsiveDatePickers.propTypes = {
    labelText: PropTypes.string
}
