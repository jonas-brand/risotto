import Gdk from 'gi://Gdk'
import Gtk from 'gi://Gtk'

export type WidgetFunction<arg> = (param: arg) => Gtk.Widget

export function forMonitors(widget: WidgetFunction<number>) {
    const n = Gdk.Display.get_default()?.get_n_monitors() || 1;
    return Array.from({length: n}, (_, i) => widget(i));
};

export default {
    forMonitors,
};
