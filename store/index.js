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
}

export const mutations = {
  setActiveCategory: (state, categoryTitle) => {
    state.activeCategory = categoryTitle
  },
}
