import { useState, Fragment, useEffect } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/24/solid'

const operators = [
	{ id: 1, label: '+' },
	{ id: 2, label: '-' },
	{ id: 3, label: '*' },
	{ id: 4, label: '/' },
]

const OperatorBox = ({operator, setOperator}) => {
	const [selectedOperator, setSelectedOperator] = useState(operators.find(o => o.label === operator))

	useEffect(() => {
		setOperator(selectedOperator.label)
	}, [selectedOperator])

	return <div className=''>
		<Listbox value={selectedOperator} onChange={setSelectedOperator}>
			<div className='relative'>
				<Listbox.Button className='relative cursor-default rounded bg-white w-20 py-2 pl-3 pr-10 text-left'>
					<span className='block truncate text-black text-md'>{selectedOperator.label}</span>
					<span className='pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2'>
						<ChevronUpDownIcon className='h-5 w-5 text-gray-400' aria-hidden='true' />
					</span>
				</Listbox.Button>
				<Transition
					as={Fragment}
					leave='transition ease-in duration-100'
					leaveFrom='opacity-100'
					leaveTo='opacity-0'
				>
					<Listbox.Options className='absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm'>
					{operators.map((operator, index) => (
						<Listbox.Option
							key={index}
							className={({ active }) =>
								`relative cursor-default select-none py-2 pl-10 pr-4 ${
								active ? 'bg-gray-200 text-gray-700' : 'text-gray-900'
								}`
							}
							value={operator}
						>
						{({ selected }) => (
							<>
							<span
								className={`block truncate ${
									selected ? 'font-bold' : 'font-medium'
								}`}
							>
								{operator.label}
							</span>
							{selected ? (
								<span className='absolute inset-y-0 left-0 flex items-center pl-3 text-black'>
									<CheckIcon className='h-4 w-4' aria-hidden='true' />
								</span>
							) : null}
							</>
						)}
						</Listbox.Option>
					))}
					</Listbox.Options>
				</Transition>
			</div>
		</Listbox>
	</div>
}

export default OperatorBox
