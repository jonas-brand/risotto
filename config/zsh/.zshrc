# The following lines were added by compinstall

zstyle ':completion:*' completer _expand _complete _ignored _approximate
zstyle ':completion:*' completions 1
zstyle ':completion:*' file-sort name
zstyle ':completion:*' glob 1
zstyle ':completion:*' ignore-parents parent
zstyle ':completion:*' list-colors ''
zstyle ':completion:*' list-prompt '%SAt %p: Hit TAB for more, or the character to insert%s'
zstyle ':completion:*' matcher-list ''
zstyle ':completion:*' max-errors 2
zstyle ':completion:*' menu select=0
zstyle ':completion:*' original true
zstyle ':completion:*' preserve-prefix '//[^/]##/'
zstyle ':completion:*' prompt '<correction options>'
zstyle ':completion:*' select-prompt '%SScrolling active: current selection at %p%s'
zstyle ':completion:*' squeeze-slashes true
zstyle ':completion:*' substitute 1
zstyle ':completion:*' use-compctl false
zstyle :compinstall filename '/home/jonas/.zshrc'

autoload -Uz compinit
compinit
# End of lines added by compinstall
# Lines configured by zsh-newuser-install
HISTFILE=~/.histfile
HISTSIZE=1000
SAVEHIST=1000
setopt autocd extendedglob nomatch
unsetopt beep notify
bindkey -v
# End of lines configured by zsh-newuser-install

# ===========================================================================

# set location of zcompdump file
compinit -d "$XDG_CACHE_HOME"/zsh/zcompdump-"$ZSH_VERSION"

# source plugins
source /usr/share/zsh/plugins/zsh-syntax-highlighting/zsh-syntax-highlighting.zsh
source /usr/share/zsh/plugins/zsh-autosuggestions/zsh-autosuggestions.zsh
source /usr/share/zsh/plugins/zsh-history-substring-search/zsh-history-substring-search.zsh

# keybindings for substring search
bindkey '^[[A' history-substring-search-up
bindkey '^[[B' history-substring-search-down

# aliases
alias -g ags='ags -c "$XDG_CONFIG_HOME/ags/build/config.js"'

# load the version control system
autoload -Uz vcs_info
precmd() { vcs_info }

# set the git prompt string
zstyle ':vcs_info:git:*' formats '%b'

retval()
{
    [ $1 != 0 ] && echo "%F{red} $1%f" && exit
    echo "%F{green} $1%f" && exit
}

# Set the prompt
setopt PROMPT_SUBST
PROMPT=' $(retval $?)
%K{blue} %F{black}󰣇 %n@%M%f %k%K{yellow}%F{blue}%f %F{black}  %~%f %k%K{cyan}%F{yellow}%f %F{black}󰘬 ${vcs_info_msg_0_}%f %k%K{magenta}%F{cyan}%f %F{black}󰁹 $(cat /sys/class/power_supply/BAT0/capacity)%% $(cat /sys/class/power_supply/BAT0/status)%f %k%K{15}%F{magenta}%f%F{0} 󰥔 %T %f%k%F{15}%f
%F{yellow} 󱞪 %f'

#display system information and arch logo
macchina
# ===========================================================================
