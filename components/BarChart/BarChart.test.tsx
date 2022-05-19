import { render, screen } from '@testing-library/react'
import BarChart from './BarChart'

test('BarChart', () => {
  render(<BarChart title="test bar chart" score={80} color="#112233" />)
  expect(screen.getByTestId('barchart-label')).toHaveTextContent(
    'test bar chart'
  )
  expect(screen.getByTestId('barchart-bar')).toHaveAttribute('role', 'math')
  expect(screen.getByTestId('barchart-bar')).toHaveAttribute(
    'aria-label',
    '80%'
  )
  expect(screen.getByTestId('barchart-bar')).toHaveStyle(
    'background-color: #112233'
  )
})
