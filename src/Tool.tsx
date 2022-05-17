import * as React from 'react'
import { IconButton } from '@storybook/components'
import Reset from './icon/Reset'

/** A toolbar icon to toggle between dark and light themes in storybook */
export const ResetUrlArgs = () => {

  const resetUrl = (): void => {
    const { href } = window.location
    const paramsRegex = new RegExp('&[A-Za-z0-9]+=', 'g')
    const paramsMatch = [...href.matchAll(paramsRegex)]

    if (paramsMatch.length) {
      const substringUrl = href.substring(0, paramsMatch[0].index)

      window.open(substringUrl, '_self')

      return
    }

    window.open(href, '_self')
  }

  return (
    <IconButton
      key="reset-url-args"
      title='Reset components arguments (&args=) from url'
      onClick={resetUrl}
    >
      <Reset />
    </IconButton>
  )
}

export default ResetUrlArgs
