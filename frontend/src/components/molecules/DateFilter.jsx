import DateField from '../atoms/DateField'

const DateFilter = ({ date, onDateChange, ...props }) => {
  return (
    <div className="flex items-center gap-2">
      <DateField id="date-filter" value={date} onChange={(e) => onDateChange(e.target.value)} {...props} />
    </div>
  )
}

export default DateFilter
