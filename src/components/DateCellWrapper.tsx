import { Box, Typography } from "@mui/material"
import dayjs from 'dayjs';
import { DateCellWrapperProps } from 'react-big-calendar';

interface IProps extends DateCellWrapperProps {
    range: Date[];
    value: Date;
    children: JSX.Element;
}

const DateCellWrapper = ({ children, value, range }: IProps) => {
  console.log(range)
  return (
    <>
      <Box style={{display: 'flex', padding: '2px 125px', background: '#000'}}>
        <Typography style={{color: '#FFF'}}>{dayjs(value.toString()).format('DD')}</Typography>
      </Box>
    </>
  )
}

export default DateCellWrapper
