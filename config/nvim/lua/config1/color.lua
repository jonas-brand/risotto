vim.o.background = "dark"
require('gruvbox').setup{
    palette_overrides =
    {
        dark0_hard = "#060A0F",
        dark0 = "#060A0F",
        dark0_soft = "#060A0F",
        dark1 = "#152030",
        dark2 = "#152030",
        dark3 = "#233B5C",
        dark4 = "#233B5C",
        light0_hard = "#D6CEC8",
        light0 = "#D6CEC8",
        light0_soft = "#D6CEC8",
        light1 = "#A6A19D",
        light2 = "#A6A19D",
        light3 = "#A6A19D",
        light4 = "#A6A19D",
        bright_red = "#BE4747",
        bright_green = "#A3A350",
        bright_yellow = "#EECD66",
        bright_blue = "#6AACDE",
        bright_purple = "#CC8449",
        bright_aqua = "#96C3BE",
        bright_orange = "#CC8449",
        neutral_red = "#AA3F3F",
        neutral_green = "#878741",
        neutral_yellow = "#878741",
        neutral_blue = "#4B7FB9",
        neutral_purple = "#B25F47",
        neutral_aqua = "#87AFA6",
        neutral_orange = "#B25F47",
        faded_red = "#BE4747",
        faded_green = "#A3A350",
        faded_yellow = "#EECD66",
        faded_blue = "#6AACDE",
        faded_purple = "#CC8449",
        faded_aqua = "#96C3BE",
        faded_orange = "#CC8449",
        dark_red_hard = "#AA3F3F",
        dark_red = "#AA3F3F",
        dark_red_soft = "#AA3F3F",
        light_red_hard = "#BE4747",
        light_red = "#BE4747",
        light_red_soft = "#BE4747",
        dark_green_hard = "#878741",
        dark_green = "#878741",
        dark_green_soft = "#878741",
        light_green_hard = "#A3A350",
        light_green = "#A3A350",
        light_green_soft = "#A3A350",
        dark_aqua_hard = "#87AFA6",
        dark_aqua = "#87AFA6",
        dark_aqua_soft = "#87AFA6",
        light_aqua_hard = "#96C3BE",
        light_aqua = "#96C3BE",
        light_aqua_soft = "#96C3BE",
        gray = "#233B5C"
    }
}

vim.cmd("colorscheme gruvbox")
vim.api.nvim_set_hl(0, "TelescopeNormal", {bg = "none"})
vim.api.nvim_set_hl(0, "TelescopeBorder", {bg = "none"})
vim.api.nvim_set_hl(0, "Normal", {bg = "none"})
vim.api.nvim_set_hl(0, "NormalFloat", {bg = "none"})
