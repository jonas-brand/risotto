# add local bin directory to PATH
export PATH=$HOME/.local/bin:$PATH

#start sway
[ "$(tty)" = "/dev/tty1" ] && exec sway
