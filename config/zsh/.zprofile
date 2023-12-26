# add local bin directory to PATH
export PATH=$HOME/.local/bin:$PATH

start Hyprland
if [ -z "${DISPLAY}" ] && [ "${XDG_VTNR}" -eq 1 ]; then
    exec Hyprland
fi
