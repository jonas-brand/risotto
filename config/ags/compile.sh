#!/bin/sh

notify-send "compiling ags configuration"
out=$(tsc -p "$XDG_CONFIG_HOME/ags")
[ "$out" != "" ] && notify-send "COMPILATION_ERRORS: $out"
echo $out

ags -c "$XDG_CONFIG_HOME/ags/build/_config/config.js" -q
ags -c "$XDG_CONFIG_HOME/ags/build/_config/config.js"
