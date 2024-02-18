#!/bin/sh

projdir=$(pwd)/$(dirname "$0")

unlink "$XDG_CONFIG_HOME/ags"
ln -sf "$projdir/config/ags" "$XDG_CONFIG_HOME/ags"
unlink "$XDG_CONFIG_HOME/alacritty"
ln -sf "$projdir/config/alacritty" "$XDG_CONFIG_HOME/alacritty"
unlink "$XDG_CONFIG_HOME/btop"
ln -sf "$projdir/config/btop" "$XDG_CONFIG_HOME/btop"
unlink "$XDG_CONFIG_HOME/gtk-2.0"
ln -sf "$projdir/config/gtk-2.0" "$XDG_CONFIG_HOME/gtk-2.0"
unlink "$XDG_CONFIG_HOME/gtk-3.0"
ln -sf "$projdir/config/gtk-3.0" "$XDG_CONFIG_HOME/gtk-3.0"
unlink "$XDG_CONFIG_HOME/hypr"
ln -sf "$projdir/config/hypr" "$XDG_CONFIG_HOME/hypr"
unlink "$XDG_CONFIG_HOME/nvim"
ln -sf "$projdir/config/nvim" "$XDG_CONFIG_HOME/nvim"
unlink "$XDG_CONFIG_HOME/zsh"
ln -sf "$projdir/config/zsh" "$XDG_CONFIG_HOME/zsh"
