import OperatorBox from './OperatorBox'

const CalculateSection = () => {

	return <div className='flex flex-col gap-2'>
		<div className='flex flex-col md:flex-row justify-center items-center w-full gap-2'>
			<input type='number' className='text-black p-2 rounded' />
			<OperatorBox />
			<input type='number' className='text-black p-2 rounded' />
			<span
				className='bg-white text-black p-2 rounded'
			>=</span>
			<input type='number' className='text-black p-2 rounded' />
		</div>
		<div className='flex justify-center gap-2'>
			<button
				className='bg-blue-900 p-2 rounded'
				onClick={() => {}}
			>Calc</button>
			<button
				className='bg-blue-900 p-2 rounded'
				onClick={() => {}}
			>Clear</button>
		</div>
	</div>
	
}

export default CalculateSection
