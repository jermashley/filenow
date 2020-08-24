import Vue from 'vue'

export const state = () => ({
  activeCategory: null,

  lightsOn: true,

  lightTheme: [
    {
      name: `--brandDark`,
      value: `rgba(32, 47, 100, 1)`,
    },
    {
      name: `--brandLightest`,
      value: `rgba(239, 241, 251, 1)`,
    },
    {
      name: `--brandText`,
      value: `rgba(54, 58, 73, 1)`,
    },
    {
      name: `--brandHoverText`,
      value: `rgba(254, 254, 254, 1)`,
    },
    {
      name: `--brandItemBackground`,
      value: `rgba(254, 254, 254, 1)`,
    },
    {
      name: `--brandItemBorder`,
      value: `rgba(239, 241, 251, 1)`,
    },
    {
      name: `--brandAccent`,
      value: `rgba(192, 32, 51, 1)`,
    },
    {
      name: `--bodyBackground`,
      value: `rgba(248, 249, 251, 1)`,
    },
  ],

  darkTheme: [
    {
      name: `--brandDark`,
      value: `rgba(32, 47, 100, 1)`,
    },
    {
      name: `--brandLightest`,
      value: `rgba(24, 27, 37, 1)`,
    },
    {
      name: `--brandText`,
      value: `rgba(240, 242, 251, 1)`,
    },
    {
      name: `--brandHoverText`,
      value: `rgba(240, 242, 251, 1)`,
    },
    {
      name: `--brandItemBackground`,
      value: `rgba(29, 33, 48, 1)`,
    },
    {
      name: `--brandItemBorder`,
      value: `rgba(24, 27, 37, 1)`,
    },
    {
      name: `--brandAccent`,
      value: `rgba(185, 70, 84, 1)`,
    },
    {
      name: `--bodyBackground`,
      value: `rgba(21, 25, 40, 1)`,
    },
  ],
})

export const getters = {
  categoryTitles: (state) => {
    return state.categories.map((category) => category.name)
  },

  activeCategory: (state) => {
    return state.activeCategory
  },

  category: (state) => (activeCategory) => {
    return state.categories.find((category) => category.name === activeCategory)
  },

  lightsOn: (state) => {
    return state.lightsOn
  },

  currentTheme: () => {
    if (Vue.$cookies.isKey(`theme`)) {
      return Vue.$cookies.get(`theme`)
    } else {
      return false
    }
  },
}

export const mutations = {
  setActiveCategory: (state, categoryTitle) => {
    state.activeCategory = categoryTitle
  },

  toggleLights: (state, bool) => {
    state.lightsOn = !state.lightsOn
  },

  setTheme: (state, theme) => {
    const root = document.documentElement

    if (theme === `light`) {
      state.lightsOn = true
      Vue.$cookies.set(`theme`, `light`)

      state.lightTheme.forEach((item) => {
        root.style.setProperty(item.name, item.value)
      })
    } else if (theme === `dark`) {
      state.lightsOn = false
      Vue.$cookies.set(`theme`, `dark`)

      state.darkTheme.forEach((item) => {
        root.style.setProperty(item.name, item.value)
      })
    } else {
      state.lightsOn = true
      Vue.$cookies.set(`theme`, `light`)

      state.lightTheme.forEach((item) => {
        root.style.setProperty(item.name, item.value)
      })
    }
  },
}
