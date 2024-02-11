import MyWidget from '../widgets/widgets.js'
import Widget from "resource:///com/github/Aylur/ags/widget.js"
import Variable from 'resource:///com/github/Aylur/ags/variable.js'
import Options from '../../_config/options.js'

const timeVar = Variable('', {poll: [1000, 'date +%H%n%M']})
const dateVar = Variable('', {poll: [10000, 'date "+%A, %d.%m.%Y"']})

const Clock = () => MyWidget.HoverRevealer({
    class_names: ['tile', 'clock', 'bar-module'],
    hpack: 'end',
    direction: 'left',
    duration: Options.bar.moduleExpansionDuration,
    pinButton: true,
    indicatorWidget: Widget.Label({
        class_names: ['time'],
        width_request: Options.bar.moduleWidth,
        label: timeVar.bind().transform(val => val.toString())
    }),
    hiddenWidget: Widget.Label({
        class_names: ['date', 'neutral'],
        margin: Options.spacing,
        label: dateVar.bind().transform(val => '  ' + val.toString())
    })
})

export default Clock
