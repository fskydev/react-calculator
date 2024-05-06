import { useEffect, useState } from 'react'
import OperatorBox from './OperatorBox'
import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc.js'
import Chart from './Chart'
dayjs.extend(utc)

const CalculateSection = () => {
	const [valueA, setValueA] = useState(0)
	const [valueB, setValueB] = useState(0)
	const [operator, setOperator] = useState('+')

	const [result, setResult] = useState(0)
	const [resultArr, setResultArr] = useState([])

	useEffect(() => {
		console.log(resultArr)
	}, [resultArr])

	const handleCalc = () => {
		let r
		switch (operator) {
			case '+':
				r = Number(valueA) + Number(valueB)
				break
			case '-':
				r = Number(valueA) - Number(valueB)
				break
			case '*':
				r = Number(valueA) * Number(valueB)
				break
			case '/':
				r = Number(valueA) / Number(valueB)
				break
		}

		setResult(r)
		setResultArr(prev => [...prev, {
			date: dayjs.utc().add(prev.length, 'day').format('MMM D, YYYY'),
			value: r,
		}])
	}

	const handleClear = () => {
		setValueA(0)
		setValueB(0)

		setOperator('+')

		setResult(0)
		setResultArr([])
	}

	return <div className='flex flex-col gap-2 md:gap-4'>
		<div className='flex flex-col gap-2'>
			<div className='flex flex-col md:flex-row justify-center items-center w-full gap-2'>
				<input
					className='text-black p-2 rounded'
					type='number'
					value={valueA}
					onChange={e => setValueA(e.target.value)}
				/>
				<OperatorBox operator={operator} setOperator={setOperator} />
				<input
					className='text-black p-2 rounded'
					type='number'
					value={valueB}
					onChange={e => setValueB(e.target.value)}
				/>
				<span className='bg-white text-black p-2 rounded'>=</span>
				<input
					className='text-black p-2 rounded'
					type='number'
					value={result}
					readOnly
				/>
			</div>
			<div className='flex justify-center gap-2'>
				<button
					className='bg-blue-900 p-2 rounded'
					onClick={handleCalc}
				>Calc</button>
				<button
					className='bg-blue-900 p-2 rounded'
					onClick={handleClear}
				>Clear</button>
			</div>
		</div>

		<Chart labels={resultArr.map(r => r.date)} values={resultArr.map(r => r.value)} />
	</div>
}

export default CalculateSection
