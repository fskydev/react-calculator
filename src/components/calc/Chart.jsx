import CHART from '../../lib/chart'
import { Line } from 'react-chartjs-2'

const Chart = ({labels, values}) => {
	return <div className='w-full p-2'>
		<Line
			options={CHART.getOptions}
			data={CHART.getData(labels, values)}
			plugins={CHART.getPlugins}
		/>
	</div>
}

export default Chart
