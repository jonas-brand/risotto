import MyWidget from '../../widgets/widgets.js'
import Widget from "resource:///com/github/Aylur/ags/widget.js"
import Audio from 'resource:///com/github/Aylur/ags/service/audio.js';
import Options from '../../../_config/options.js'

const Icon = () => Widget.Icon({
    class_name: 'icon in-process',
    size: Options.bar.moduleWidth - 2 * Options.spacing,
    icon: Options.audio.icon.muted,
    setup: self => self
        .hook(Audio, self => self.class_name = Audio.speaker?.stream.is_muted ? 'icon neutral' : 'icon in-process')
        .hook(Audio, self => self.icon = Audio.speaker?.stream.is_muted ? Options.audio.icon.muted : Options.audio.icon.not_muted[Math.round((Audio.speaker?.volume || 0) * 2)])
})

const Content = () => Widget.Box({
    spacing: Options.spacing,
    children: [
        Widget.Label({
            hexpand: true,
            label: Audio.speaker?.bind('volume').transform(volume => `${Math.round((volume || 0) * 100)}%`),
            setup: self => self
                .hook(Audio, self => self.class_name = Audio.speaker?.stream.is_muted ? 'neutral' : 'in-process')
        }),
        Widget.Slider({
            draw_value: false,
            width_request: 100,
            min: 0,
            max: 1,
            on_change: ({value}) => {
                if(Audio.speaker)
                    Audio.speaker.volume = value
            },
            setup: self => self
                .hook(Audio, self => self.class_name = Audio.speaker?.stream.is_muted ? 'neutral' : 'in-process')
                .hook(Audio, self => self.value = Audio.speaker?.volume || 0)
        }),
        MyWidget.Switch({
            inital_value: true,
            on_activate: () => Audio.speaker?.stream.change_is_muted(false),
            on_deactivate: () => Audio.speaker?.stream.change_is_muted(true),
        })
    ]
})

export default {
    Icon,
    Content
}
