// Write your code here
import {PieChart, Pie, Legend, Cell, ResponsiveContainer} from 'recharts'
import './index.css'

const VaccinationByAge = props => {
  const {value7} = props

  return (
    <div className="con1 con">
      <div>
        <h1 className="head">Vaccination By Age</h1>
        <ResponsiveContainer width={1000} height={300}>
          <PieChart>
            <Pie
              cx="50%"
              cy="40%"
              data={value7}
              startAngle={0}
              endAngle={360}
              dataKey="count"
            >
              <Cell name="18-44" fill="#fecba6" />
              <Cell name="45-60" fill="#b3d23f" />
              <Cell name="Above 60" fill="#a44c9e" />
            </Pie>
            <Legend
              iconType="circle"
              layout="horizontal"
              verticalAlign="bottom"
              align="center"
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default VaccinationByAge
