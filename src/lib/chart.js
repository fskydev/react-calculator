import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
} from 'chart.js'

ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
)

export default {
	getOptions: {
		responsive: true,
		plugins: {
			title: {
				display: true,
				text: 'Result',
				font: {
					size: 18
				},
				color: '#9ca3af'
			},
			customCanvasBackgroundColor: {
				color: '#111827',
			}
		},
		layout: {
			padding: 10
		}
	},
	getPlugins: [{
		id: 'customCanvasBackgroundColor',
		beforeDraw: (chart, args, options) => {
			const {ctx} = chart;
			ctx.save();
			ctx.globalCompositeOperation = 'destination-over';
			ctx.fillStyle = options.color || '#99ffff';
			ctx.fillRect(0, 0, chart.width, chart.height);
			ctx.restore();
		}
	}],
	getData: (labels, values) => ({
		labels,
		datasets: [{
			label: 'Result',
			data: values,
			borderColor: '#9ca3af',
			backgroundColor: '#0ff',
			fill: true,
		}]
	})
}
