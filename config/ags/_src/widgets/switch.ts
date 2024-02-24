import Widget from 'resource:///com/github/Aylur/ags/widget.js'

export type SwitchProps = {
    class_names?: string[];
    inital_value: boolean;
    on_activate: () => void;
    on_deactivate: () => void;
}

export const Switch = (props: SwitchProps) => Widget.Button({
    class_name: `switch ${props.inital_value ? 'on' : 'off'}`,
    attribute: props.inital_value,
    child: Widget.Box({
        class_name: 'handle'
    }),
    on_clicked: self => {
        self.attribute = !self.attribute
        if (self.attribute) {
            self.class_name = 'switch on'
            props.on_activate()
        }
        else {
            self.class_name = 'switch off'
            props.on_deactivate()
        }
    }
})

export default Switch
