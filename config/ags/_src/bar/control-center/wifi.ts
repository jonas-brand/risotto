import MyWidget from '../../widgets/widgets.js'
import Widget from "resource:///com/github/Aylur/ags/widget.js"
import Variable from 'resource:///com/github/Aylur/ags/variable.js'
import Network from 'resource:///com/github/Aylur/ags/service/network.js';
import Options from '../../../_config/options.js'

const wifiState = Variable('disconnected')
Network.wifi.connect('changed', () => {
    wifiState.value = Network.wifi.internet
    if(!Network.wifi.enabled)
        wifiState.value = 'disabled'
})

const Icon = () => Widget.Icon({
    class_name: wifiState.bind().transform(state => {
        switch(state) {
            case 'connected': return 'icon good'.toString()
            case 'disconnected': return 'icon bad'.toString()
            case 'connecting': return 'icon in-process'.toString()
            default: return 'icon neutral'.toString()
        }
    }),
    size: Options.bar.moduleWidth - 2 * Options.spacing,
    icon: wifiState.bind().transform(state => {
        switch(state) {
            case 'connected': return Options.wifi.icon.connected[Math.round(Network.wifi.strength / 25)].toString()
            case 'disconnected': return Options.wifi.icon.disconnected
            case 'connecting': return Options.wifi.icon.scanning
            default: return Options.wifi.icon.disabled
        }
    })
})

const Content = () => Widget.Box({
    spacing: Options.spacing,
    children: [
        Widget.Label({
            class_name: 'good',
            visible: wifiState.bind().transform(state => state === 'connected'),
            label: Network.wifi.bind('ssid').transform(ssid => ssid ? ssid.toString() : '')
        }),
        Widget.Label({
            class_name: wifiState.bind().transform(state => {
                switch(state) {
                    case 'connected': return 'good'.toString()
                    case 'disconnected': return 'bad'.toString()
                    case 'connecting': return 'in-process'.toString()
                    default: return 'neutral'.toString()
                }
            }),
            hexpand: true,
            label: wifiState.bind().transform(state => state.toString())
        }),
        MyWidget.Switch({
            inital_value: true,
            on_deactivate: () => Network.wifi.enabled = false,
            on_activate: () => Network.wifi.enabled = true,
        })
    ]

})

export default {
    Icon,
    Content
}

Network.wifi.emit('changed')
