import type { AppProps } from 'next/app'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
const queryClient = new QueryClient()
import { ThemeProvider } from '@mui/material'
import GlobalCssPriority from '@/components/globalcssprop'
import theme from '@/utils/theme'
import { Provider } from 'react-redux'
import { store } from '@/store'
import '@/app/global.css'

export default function App({ Component, pageProps }: AppProps) {
    return (
        <QueryClientProvider client={queryClient}>
            <Provider store={store}>
                <ThemeProvider theme={theme}>
                    <GlobalCssPriority>
                        <Component {...pageProps} />
                    </GlobalCssPriority>
                </ThemeProvider>
            </Provider>
            <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
    )
}
