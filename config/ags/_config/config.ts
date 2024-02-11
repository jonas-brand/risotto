import App from 'resource:///com/github/Aylur/ags/app.js'
import MyUtils from './../_src/utils/utils.js'
import Bar from './../_src/bar/bar.js'

export default {
    style: App.configDir + '/../../_theme/theme.css',
    windows: [
        ...MyUtils.forMonitors(Bar.foreground),
        ...MyUtils.forMonitors(Bar.background),
    ]
}
