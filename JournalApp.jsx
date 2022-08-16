import React from 'react'
import { AppRouter } from './src/router/AppRouter'
import { AppTheme } from './src/theme/AppTheme'

export const JournalApp = () => {
  return (
    <AppTheme>
        <AppRouter />
    </AppTheme>
  )
}
