import Vue from 'vue'

export const state = () => ({
  categories: [
    {
      name: `E-File & Serve`,
      links: [
        {
          name: `California`,
          href: `https://california.tylerhost.net/OfsWeb`,
        },
        {
          name: `Georgia`,
          href: `https://efilega.tylerhost.net/ofsweb`,
        },
        {
          name: `Idaho`,
          href: `https://idaho.tylerhost.net/ofsweb`,
        },
        {
          name: `Illinois`,
          href: `https://illinois.tylerhost.net/OfsWeb`,
        },
        {
          name: `Indiana`,

          href: `https://indiana.tylerhost.net/ofsweb`,
        },
        {
          name: `Louisiana`,
          href: `https://louisiana.tylerhost.net/ofsweb`,
        },
        // {
        //   name: `Maine`,
        //   href: `https://maine.tylerhost.net/ofsweb`
        // },
        {
          name: `Maryland`,
          href: `https://maryland.tylerhost.net/ofsweb`,
        },
        {
          name: `Massachusetts`,
          href: `https://massachusetts.tylerhost.net/ofsweb`,
        },
        {
          name: `Minnesota`,
          href: `https://minnesota.tylerhost.net/ofsweb`,
        },
        {
          name: `Nevada`,
          href: `https://nevada.tylerhost.net/ofsweb`,
        },
        {
          name: `New Hampshire`,
          href: `https://newhampshire.tylerhost.net/ofsweb`,
        },
        {
          name: `New Mexico`,
          href: `https://newmexico.tylerhost.net/ofsweb`,
        },
        {
          name: `North Dakota`,
          href: `https://northdakota.tylerhost.net/ofsweb`,
        },
        {
          name: `Ohio`,
          href: `https://ohio.tylerhost.net/ofsweb`,
        },
        {
          name: `Oregon`,
          href: `https://oregon.tylerhost.net/ofsweb`,
        },
        {
          name: `Tribal Courts`,
          href: `https://efile-tribalcourts.tylerhost.net/ofsweb`,
        },
        {
          name: `Pennsylvania`,
          href: `https://lehigh.tylerhost.net/ofsweb`,
        },
        {
          name: `Rhode Island`,
          href: `https://rhodeisland.tylerhost.net/ofsweb`,
        },
        {
          name: `South Dakota`,
          href: `https://southdakota.tylerhost.net/ofsweb`,
        },
        {
          name: `Tennessee`,
          href: `https://tennessee.tylerhost.net/ofsweb`,
        },
        {
          name: `Texas`,
          href: `https://efile.txcourts.gov/ofsweb`,
        },
        {
          name: `Vermont`,
          href: `https://vermont.tylerhost.net/ofsweb`,
        },
        {
          name: `Virginia`,
          href: `https://virginia.tylerhost.net/ofsweb`,
        },
      ],
    },
    {
      name: `re:Search`,
      links: [
        {
          name: `re:SearchGA`,
          href: `https://researchga.tylerhost.net/CourtRecordsSearch/Home#/home`,
        },
        {
          name: `re:SearchIL`,
          href: `https://researchil.tylerhost.net/CourtRecordsSearch/Home#/home`,
        },
        {
          name: `re:SearchNM`,
          href: `https://researchnm.tylerhost.net/CourtRecordsSearch/Home#/home`,
        },
        {
          name: `re:SearchTX`,
          href: `https://research.txcourts.gov/CourtRecordsSearch/Home#/home`,
        },
      ],
    },
    {
      name: `Guide & File`,
      links: [
        {
          name: `California`,
          href: `https://california.tylerhost.net/srl`,
        },
        {
          name: `Georgia`,
          href: `https://georgia.tylerhost.net/srl`,
        },
        {
          name: `Idaho`,
          href: `https://idaho.tylerhost.net/srl`,
        },
        {
          name: `Illinois`,
          href: `https://illinois.tylerhost.net/SRL`,
        },
        {
          name: `Indiana`,
          href: `https://indiana.tylerhost.net/srl`,
        },
        {
          name: `Maine`,
          href: `https://maine.tylerhost.net/srl`,
        },
        {
          name: `Massachusetts`,
          href: `https://massachusetts.tylerhost.net/srl`,
        },
        {
          name: `Minnesota`,
          href: `https://minnesota.tylerhost.net/srl`,
        },
        {
          name: `Nevada`,
          href: `https://nevada.tylerhost.net/srl`,
        },
        {
          name: `New Mexico`,
          href: `https://newmexico.tylerhost.net/srl`,
        },
        {
          name: `North Dakota`,
          href: `https://northdakota.tylerhost.net/srl`,
        },
        {
          name: `Ohio`,
          href: `https://ohio.tylerhost.net/srl`,
        },
        {
          name: `Oregon`,
          href: `https://oregon.tylerhost.net/srl`,
        },
        {
          name: `Rhode Island`,
          href: `https://rhodeisland.tylerhost.net/srl`,
        },
        {
          name: `South Dakota`,
          href: `https://southdakota.tylerhost.net/srl`,
        },
        {
          name: `Tennessee`,
          href: `https://tennessee.tylerhost.net/srl`,
        },
        {
          name: `Texas`,
          href: `https://selfhelp.efiletexas.gov/srl`,
        },
        {
          name: `Virginia`,
          href: `https://virginia.tylerhost.net/srl`,
        },
      ],
    },
    {
      name: `Rhode Island Supreme Court Attorney Portal`,
      links: [
        {
          name: `Rhode Island`,
          href: `https://rhodeisland.tylerhost.net/TylerFamis/UserAccount/Login`,
        },
      ],
    },
    {
      name: `Support`,
      links: [
        {
          name: `Go To Assist`,
          href: `https://gotoassist.me`,
        },
        {
          name: `BomGar`,
          href: `https://nwsupport.tylertech.com`,
        },
        {
          name: `IP Chicken`,
          href: `https://ipchicken.com`,
        },
        {
          name: `BrightCloud®`,
          href: `https://www.brightcloud.com/`,
        },
      ],
    },
  ],

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
