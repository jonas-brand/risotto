local colors = {
    bg_dark = "#0E1724",
    bg_light = "#1D314D",
    fg_dark = "#A6A19D",
    fg_light = "#D6CEC8",
    red = "AA3F3F",
    red_light = "#BE4747",
    green = "#878741",
    green_light = "#A3A350",
    yellow = "#D1A14D",
    yellow_light = "#EECD66",
    blue = "#4B7FB9",
    blue_light = "#6AACDE",
    magenta = "#B25F47",
    magenta_light = "#CC8449",
    cyan = "#87AFA6",
    cyan_light = "#96C3BE"
}

local theme = {
    normal = {
        a = { fg = colors.fg_light, bg = colors.bg_light, gui = 'bold' },
        b = { fg = colors.fg_light, bg = colors.bg_light },
        c = { fg = colors.fg_light, bg = colors.bg_dark },
    },
    insert = { a = { fg = colors.bg_dark, bg = colors.green, gui = 'bold' } },
    visual = { a = { fg = colors.bg_dark, bg = colors.magenta, gui = 'bold' } },
    replace = { a = { fg = colors.bg_dark, bg = colors.red, gui = 'bold' } },
    inactive = {
        a = { fg = colors.fg_light, bg = colors.bg_light, gui = 'bold' },
        b = { fg = colors.fg_light, bg = colors.bg_light },
        c = { fg = colors.fg_light, bg = colors.bg_light },
    }
}

require('lualine').setup
{
    options = {
        theme = theme,
        component_separators = { left = '', right = ''},
        section_separators = { left = '', right = ''},
        sections = {
            lualine_a = {'mode'},
            lualine_b = {'branch', 'diff', 'diagnostics'},
            lualine_c = {'filename'},
            lualine_x = {'encoding', 'fileformat', 'filetype'},
            lualine_y = {'progress'},
            lualine_z = {'location'}
        }
    }
}
