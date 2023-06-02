import React from "react";
import { DatePicker } from "antd";
import moment from "moment/moment";

const {RangePicker} = DatePicker;

function ANTDateRangePicker () {

    const [dates, setDates] = React.useState([]);
    console.log(dates,'dates');

    const presetRanges = {
        '3 Months': [moment().subtract(3, 'months'), moment()],
        '6 Months': [moment().subtract(6, 'months'), moment()],
        'This Year': [
            moment().startOf('year'),
            moment().endOf('year'), 
        ],
        'Previous Year': [
            moment().subtract(1, 'year').startOf('year'),
            moment().subtract(1, 'year').endOf('year'),
        ],
      };

    return (
        <>
        <div>
            <h1 style={{marginLeft:'10px'}}>ANT Date Range Picker</h1>
        </div>
        <div style={{margin : 20}}>
            <RangePicker 
            ranges={presetRanges}
            onChange={(values) => {
                setDates(values?.map((item)=>{
                    return moment(item).format('MM-DD-YYYY')
                }))
            }}
            />
        </div>
        </>
    )
}

export default ANTDateRangePicker;