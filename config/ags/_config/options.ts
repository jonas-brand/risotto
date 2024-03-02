export default {
    spacing: 7,
    bar: {
        moduleExpansionDuration: 200,
        moduleWidth: 40
    },
    controlCenter: {
        width: 500
    },
    battery: {
        lowLimit: 13,
        icon: {
            full: 'battery-full-symbolic',
            low: 'battery-empty-symbolic',
            charging: [
                'battery-empty-charging-symbolic',
                'battery-low-charging-symbolic',
                'battery-medium-charging-symbolic',
                'battery-good-charging-symbolic',
                'battery-full-charging-symbolic'
            ],
            discharging: [
                'battery-empty-symbolic',
                'battery-low-symbolic',
                'battery-medium-symbolic',
                'battery-good-symbolic',
                'battery-full-symbolic'
            ]
        }
    },
    wifi: {
        icon: {
            connected: [
                'network-wireless-signal-none-symbolic',
                'network-wireless-signal-weak-symbolic',
                'network-wireless-signal-ok-symbolic',
                'network-wireless-signal-good-symbolic',
                'network-wireless-signal-excellent-symbolic'
            ],
            disconnected: 'network-wireless-disconnected-symbolic',
            scanning: 'network-wireless-acquiring-symbolic',
            disabled: 'network-wireless-connected-symbolic'
        }
    },
    audio: {
        icon: {
            not_muted: [
                'audio-volume-low-symbolic',
                'audio-volume-medium-symbolic',
                'audio-volume-high-symbolic'
            ],
            muted: 'audio-volume-high-symbolic'
        }
    }
}
