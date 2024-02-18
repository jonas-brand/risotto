import MyWidget from '../../widgets/widgets.js'
import Widget from "resource:///com/github/Aylur/ags/widget.js"
import Options from '../../../_config/options.js'

import Battery from './battery.js'
import Wifi from './wifi.js'

const icons = () => Widget.Box({
    vertical: true,
    hpack: 'center',
    vpack: 'center',
    width_request: Options.bar.moduleWidth,
    children: [
        Battery.Icon(),
        Wifi.Icon()
    ]
})

const content = () => Widget.Box({
    vertical: true,
    vpack: 'center',
    margin_top: Options.spacing,
    margin_bottom: Options.spacing,
    margin_right: Options.spacing,
    spacing: Options.spacing,
    children: [
        Battery.Content(),
        Wifi.Content()
    ]
})

const ControlCenter = () => MyWidget.HoverRevealer({
    class_names: ['tile', 'control-center', 'bar-module'],
    hpack: 'end',
    direction: 'left',
    duration: Options.bar.moduleExpansionDuration,
    pinButton: true,
    indicatorWidget: icons(),
    hiddenWidget: content()
})

export default ControlCenter
