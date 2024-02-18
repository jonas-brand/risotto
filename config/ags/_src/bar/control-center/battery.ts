import Widget from "resource:///com/github/Aylur/ags/widget.js"
import Variable from 'resource:///com/github/Aylur/ags/variable.js'
import Battery from 'resource:///com/github/Aylur/ags/service/battery.js';
import Options from '../../../_config/options.js'

const batteryState = Variable('discharging')
Battery.connect('changed', () => {
    batteryState.value = 'discharging'
    if(Battery.charging) {
        batteryState.value = 'charging'
    }
    else if(Battery.percent < Options.battery.lowLimit) {
        batteryState.value = 'low'
    }
    if(Battery.charged) {
        batteryState.value = 'full'
    }
})

const Icon = () => Widget.Icon({
    class_name: batteryState.bind().transform(state => {
        switch(state) {
            case 'full': return 'icon good'.toString()
            case 'low': return 'icon bad'.toString()
            case 'charging': return 'icon in-process'.toString()
            default: return 'icon ok'.toString()
        }
    }),
    size: Options.bar.moduleWidth - 2 * Options.spacing,
    icon: batteryState.bind().transform(state => {
        switch(state) {
            case 'full': return Options.battery.icon.full.toString()
            case 'low': return Options.battery.icon.low.toString()
            case 'charging': return Options.battery.icon.charging[Math.round(Battery.percent / 25)].toString()
            default: return Options.battery.icon.discharging[Math.round(Battery.percent / 25)].toString()
        }
    })
})

const Content = () => Widget.Box({
    spacing: Options.spacing,
    children: [
        Widget.Label({
            class_name: batteryState.bind().transform(state => {
                switch(state) {
                    case 'full': return 'good'.toString()
                    case 'low': return 'bad'.toString()
                    case 'charging': return 'in-process'.toString()
                    default: return 'ok'.toString()
                }
            }),
            label: Battery.bind('percent').transform(percent => `${percent}%`)
        }),
        Widget.Label({
            class_name: batteryState.bind().transform(state => {
                switch(state) {
                    case 'full': return 'good'.toString()
                    case 'low': return 'bad'.toString()
                    case 'charging': return 'in-process'.toString()
                    default: return 'ok'.toString()
                }
            }),
            hexpand: true,
            label: batteryState.bind().transform(state => state.toString())
        })
    ]
})

export default {
    Icon,
    Content
}
