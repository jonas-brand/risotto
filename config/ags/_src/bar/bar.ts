import Gtk from 'gi://Gtk'
import Widget from "resource:///com/github/Aylur/ags/widget.js"
import Options from "./../../_config/options.js"

import Clock from "./clock.js"

const barSection = (vpack: 'start' | 'center' | 'end', children: Gtk.Widget[]) => Widget.Box({
    vertical: true,
    spacing: Options.spacing,
    vpack: vpack,
    children: children
})

const bar = (monitor: number) => Widget.CenterBox({
    orientation: Gtk.Orientation.VERTICAL,
    margin: Options.spacing,
    start_widget: barSection('start', [
        Clock(),
    ])
})

const background = (monitor: number) => Widget.Window({
    name: `bar-background-${monitor}`,
    class_names: ['bar', 'background'],
    monitor: monitor,
    anchor: ['right', 'top', 'bottom'],
    layer: 'bottom',
    exclusivity: 'exclusive',
    width_request: Options.bar.moduleWidth + 2 * Options.spacing + 3
})

const foreground = (monitor: number) => Widget.Window({
    name: `bar-foreground-${monitor}`,
    class_names: ['bar', 'foreground'],
    monitor: monitor,
    anchor: ['right', 'top', 'bottom'],
    layer: 'top',
    exclusivity: 'ignore',
    child: bar(monitor)
})

export default {
    background,
    foreground
}
