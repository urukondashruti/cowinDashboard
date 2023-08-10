import './index.css'

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Legend,
  ResponsiveContainer,
} from 'recharts'

const VaccinationCoverage = props => {
  const {value5} = props
  const DataFormatter = number => {
    if (number > 1000) {
      return `${(number / 1000).toString()}k`
    }
    return number.toString()
  }

  return (
    <div className="con1 con">
      <div>
        <h1 className="head">Vaccination Coverage</h1>
        <ResponsiveContainer width={900} height={300}>
          <BarChart data={value5} margin={{top: 5}}>
            <XAxis
              dataKey="vaccine_date"
              tick={{stroke: 'gray', strokeWidth: 1}}
            />
            <YAxis
              tickFormatter={DataFormatter}
              tick={{
                stroke: 'gray',
                strokeWidth: 0,
              }}
            />
            <Legend
              wrapperStyle={{
                padding: 30,
              }}
            />
            <Bar dataKey="dose_1" name="Dose 1" fill="#1f77b4" barSize="20%" />
            <Bar dataKey="dose_1" name="Dose 2" fill="#fd7f0e" barSize="20%" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default VaccinationCoverage
