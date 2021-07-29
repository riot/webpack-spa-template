import '@riotjs/hot-reload'
import { component } from 'riot'
import App from './app.riot'
import registerGlobalComponents from './register-global-components'

// register
registerGlobalComponents()

console.log(App)

// mount the root tag
component(App)(document.getElementById('root'))
