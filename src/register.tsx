import * as React from 'react'
import Tool from './Tool'
import { addons, types } from '@storybook/addons'

addons.register('storybook/reset-url-args', () => {
  addons.add('storybook/reset-url-args', {
    match: ({ viewMode }) => viewMode === 'story' || viewMode === 'docs',
    render: () => <Tool />,
    title: 'reset url args',
    type: types.TOOL
  })
})
