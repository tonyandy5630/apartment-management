import type { AppProps } from 'next/app'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { ThemeProvider } from '@mui/material/styles'
import GlobalCssPriority from '@/components/globalcssprop'
import theme from '@/utils/theme'
import { Provider } from 'react-redux'
import { store } from '@/store'
import '@/app/global.css'
import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { CookiesProvider } from 'react-cookie'

export default function App({ Component, pageProps }: AppProps) {
    const queryClient = new QueryClient()

    return (
        <QueryClientProvider client={queryClient}>
            <Provider store={store}>
                <ThemeProvider theme={theme}>
                    <GlobalCssPriority>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <CookiesProvider>
                                <Component {...pageProps} />
                            </CookiesProvider>
                            <ToastContainer
                                position="top-right"
                                autoClose={5000}
                                hideProgressBar={false}
                            />
                        </LocalizationProvider>
                    </GlobalCssPriority>
                </ThemeProvider>
            </Provider>
            <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
    )
}
