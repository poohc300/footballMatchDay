import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

export default createVuetify({
    theme: {
        defaultTheme: 'light', // 기본 테마를 라이트 테마로 설정
    },
    components,
    directives
})