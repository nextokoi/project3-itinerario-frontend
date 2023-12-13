import * as React from 'react';
import dayjs from 'dayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
// import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
// import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';

export default function ResponsiveDatePickers({ labelText }) {
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
                    <DesktopDatePicker defaultValue={dayjs('2022-04-17')} />
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
