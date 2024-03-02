import MyWidget from '../../widgets/widgets.js'
import Widget from "resource:///com/github/Aylur/ags/widget.js"
import Options from '../../../_config/options.js'

import Battery from './battery.js'
import Wifi from './wifi.js'
import Audio from './audio.js'

const icons = () => Widget.Box({
    vertical: true,
    hpack: 'center',
    homogeneous: true,
    vexpand: true,
    width_request: Options.bar.moduleWidth,
    children: [
        Battery.Icon(),
        Wifi.Icon(),
        Audio.Icon()
    ]
})

const content = () => Widget.Box({
    vertical: true,
    width_request: Options.controlCenter.width - Options.bar.moduleWidth,
    homogeneous: true,
    margin_top: Options.spacing,
    margin_bottom: Options.spacing,
    margin_right: Options.spacing,
    spacing: Options.spacing,
    children: [
        Battery.Content(),
        Wifi.Content(),
        Audio.Content()
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
