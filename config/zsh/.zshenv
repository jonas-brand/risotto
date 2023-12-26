export XDG_DATA_HOME=$HOME/.local/share
export XDG_CONFIG_HOME=$HOME/.config
export XDG_STATE_HOME=$HOME/.local/state
export XDG_CACHE_HOME=$HOME/.cache

export CARGO_HOME=$XDG_DATA_HOME/cargo
export GTK2_RC_FILES=$XDG_CONFIG_HOME/gtk-2.0/gtkrc
export RUSTUP_HOME=$XDG_DATA_HOME/rustup
export XAUTHORITY=$XDG_RUNTIME_DIR/Xauthority

alias wget=wget --hsts-file="$XDG_DATA_HOME/wget-hsts"
