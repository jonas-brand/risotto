import Gtk from "node_modules/@girs/gtk-3.0/gtk-3.0"
import Widget from 'resource:///com/github/Aylur/ags/widget.js'
import Options from './../../_config/options.js'

export type HoverRevealerProps = {
    class_names?: string[];
    hpack?: 'start' | 'end';
    indicatorWidget: Gtk.Widget;
    hiddenWidget: Gtk.Widget;
    direction: 'left' | 'right';
    duration: number;
    pinButton: boolean;
}

export function HoverRevealer(props: HoverRevealerProps) {
    let pinButton = Widget.Button({
        class_names: ['toggle-button', 'neutral', 'inactive'],
        hpack: 'end',
        vpack: 'start',
        margin_end: props.direction === 'left' ? Options.spacing : 0,
        margin_start: props.direction === 'right' ? Options.spacing : 0,
        margin_top: Options.spacing,
        margin_bottom: Options.spacing,
        on_clicked: () => box.attribute = !box.attribute,
        child: Widget.Icon({
            class_names: ['icon'],
            icon: 'window-pin-symbolic'
        })
    })

    const hidden = props.pinButton ? Widget.Box({
        children: props.direction === 'left' ? [props.hiddenWidget, pinButton] : [pinButton, props.hiddenWidget]
    }) :
    props.hiddenWidget;

    const revealer = Widget.Revealer({
        transition: `slide_${props.direction}`,
        transition_duration: props.duration,
        child: hidden
    })

    const indicatorBox = Widget.EventBox({
        child: props.indicatorWidget,
        setup: self => self
            .on('enter-notify-event', () => revealer.reveal_child = true)
    })

    const box = Widget.EventBox({
        class_names: ['hover-revealer', ...props.class_names || []],
        hpack: props.hpack,
        attribute: false,
        child: Widget.Box({
            children: props.direction === 'left' ? [indicatorBox, revealer] : [revealer, indicatorBox]
        }),
        setup: self => self
            .on('notify::attribute', () => {
                pinButton.toggleClassName('inactive', !box.attribute)
                pinButton.toggleClassName('active', box.attribute)
            })
            .on('leave-notify-event', () => revealer.reveal_child = box.attribute)
    })

    return box
}

export default HoverRevealer
