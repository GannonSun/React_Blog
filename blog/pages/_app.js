import App from 'next/app'
import MainLayout from '../components/MainLayout'

import 'antd/dist/antd.css'
import '../static/style/pages/comm.css' // 全局样式

// 新增了这一段
class MyApp extends App {
    static getInitialProps = async (props) => {
        const { Component, ctx } = props
        
        let pageProps
        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx)
        }
        return {
            pageProps
        }
    }

    render() {
        const { Component, pageProps } = this.props

        return (
            <MainLayout {...pageProps} >
                <Component {...pageProps} />
            </MainLayout>
        )
    }
}

export default MyApp