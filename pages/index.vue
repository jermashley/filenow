<template>
  <main>
    <header>
      <h1>FileNow.me</h1>
    </header>

    <form>
      <section>
        <label for="efile">E-File &amp; Serve</label>
        <div class="selectGroup">
          <select
            id="efile"
            v-model="eFileLink"
            name="efile"
            class="efile"
            @change="goToUrl(eFileLink)"
          >
            <option :value="eFileLink" disabled>Select your state</option>
            <option
              v-for="link in eFileLinks"
              :key="link.href"
              :value="link.href"
              >{{ link.name }}</option
            >
          </select>

          <svg
            width="12"
            height="7"
            viewBox="0 0 12 7"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.11328 6.80078C6.32812 7.01562 6.62891 7.01562 6.84375 6.80078L11.8281 1.77344C12.043 1.55859 12.043 1.21484 11.8281 1.04297L11.5273 0.742188C11.3125 0.527344 11.0117 0.527344 10.7969 0.742188L6.5 5.125L2.16016 0.699219C1.94531 0.527344 1.64453 0.527344 1.42969 0.699219L1.12891 1.04297C0.914062 1.21484 0.914062 1.55859 1.12891 1.77344L6.11328 6.80078Z"
              fill="white"
            ></path>
          </svg>
        </div>
      </section>
    </form>

    <form>
      <section>
        <label for="reSearch">re:Search</label>
        <div class="selectGroup">
          <select
            id="reSearch"
            v-model="reSearchLink"
            name="reSearch"
            class="reSearch"
            @change="goToUrl(reSearchLink)"
          >
            <option :value="reSearchLink" disabled>Select your state</option>
            <option
              v-for="link in reSearchLinks"
              :key="link.href"
              :value="link.href"
              >{{ link.name }}</option
            >
          </select>

          <svg
            width="12"
            height="7"
            viewBox="0 0 12 7"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.11328 6.80078C6.32812 7.01562 6.62891 7.01562 6.84375 6.80078L11.8281 1.77344C12.043 1.55859 12.043 1.21484 11.8281 1.04297L11.5273 0.742188C11.3125 0.527344 11.0117 0.527344 10.7969 0.742188L6.5 5.125L2.16016 0.699219C1.94531 0.527344 1.64453 0.527344 1.42969 0.699219L1.12891 1.04297C0.914062 1.21484 0.914062 1.55859 1.12891 1.77344L6.11328 6.80078Z"
              fill="white"
            ></path>
          </svg>
        </div>
      </section>
    </form>

    <form>
      <section>
        <label for="guideFile">Guide &amp; File</label>
        <div class="selectGroup">
          <select
            id="guideFile"
            v-model="guideFileLink"
            name="guideFile"
            class="guideFile"
            @change="goToUrl(guideFileLink)"
          >
            <option :value="guideFileLink" disabled>Select your state</option>
            <option
              v-for="link in guideFileLinks"
              :key="link.href"
              :value="link.href"
              >{{ link.name }}</option
            >
          </select>

          <svg
            width="12"
            height="7"
            viewBox="0 0 12 7"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.11328 6.80078C6.32812 7.01562 6.62891 7.01562 6.84375 6.80078L11.8281 1.77344C12.043 1.55859 12.043 1.21484 11.8281 1.04297L11.5273 0.742188C11.3125 0.527344 11.0117 0.527344 10.7969 0.742188L6.5 5.125L2.16016 0.699219C1.94531 0.527344 1.64453 0.527344 1.42969 0.699219L1.12891 1.04297C0.914062 1.21484 0.914062 1.55859 1.12891 1.77344L6.11328 6.80078Z"
              fill="white"
            ></path>
          </svg>
        </div>
      </section>
    </form>
  </main>
</template>

<script>
export default {
  head() {
    return {
      title: `FileNow.me`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Select your state to begin.'
        }
      ]
    }
  },

  data() {
    return {
      eFileLink: null,
      reSearchLink: null,
      guideFileLink: null,
      guideFileLinks: [
        {
          name: `California`,
          href: `https://california.tylerhost.net/srl`
        },
        {
          name: `Georgia`,
          href: `https://georgia.tylerhost.net/srl`
        },
        {
          name: `Idaho`,
          href: `https://idaho.tylerhost.net/srl`
        },
        {
          name: `Illinois`,
          href: `https://illinois.tylerhost.net/SRL`
        },
        {
          name: `Indiana`,
          href: `https://indiana.tylerhost.net/srl`
        },
        {
          name: `Maine`,
          href: `https://maine.tylerhost.net/srl`
        },
        {
          name: `Massachusetts`,
          href: `https://massachusetts.tylerhost.net/srl`
        },
        {
          name: `Minnesota`,
          href: `https://minnesota.tylerhost.net/srl`
        },
        {
          name: `Nevada`,
          href: `https://nevada.tylerhost.net/srl`
        },
        {
          name: `New Mexico`,
          href: `https://newmexico.tylerhost.net/srl`
        },
        {
          name: `North Dakota`,
          href: `https://northdakota.tylerhost.net/srl`
        },
        {
          name: `Ohio`,
          href: `https://ohio.tylerhost.net/srl`
        },
        {
          name: `Oregon`,
          href: `https://oregon.tylerhost.net/srl`
        },
        {
          name: `Rhode Island`,
          href: `https://rhodeisland.tylerhost.net/srl`
        },
        {
          name: `South Dakota`,
          href: `https://southdakota.tylerhost.net/srl`
        },
        {
          name: `Tennessee`,
          href: `https://tennessee.tylerhost.net/srl`
        },
        {
          name: `Texas`,
          href: `https://selfhelp.efiletexas.gov/srl`
        },
        {
          name: `Virginia`,
          href: `https://virginia.tylerhost.net/srl`
        }
      ],
      reSearchLinks: [
        {
          name: `re:SearchGA`,
          href: `https://researchga.tylerhost.net/CourtRecordsSearch/Home#/home`
        },
        {
          name: `re:SearchIL`,
          href: `https://researchil.tylerhost.net/CourtRecordsSearch/Home#/home`
        },
        {
          name: `re:SearchNM`,
          href: `https://researchnm.tylerhost.net/CourtRecordsSearch/Home#/home`
        },
        {
          name: `re:SearchTX`,
          href: `https://research.txcourts.gov/CourtRecordsSearch/Home#/home`
        }
      ],
      eFileLinks: [
        {
          name: `Go To Assist`,
          href: `https://gotoassist.me`
        },
        {
          name: `BomGar -- Support`,
          href: `https://nwsupport.tylertech.com`
        },
        {
          name: `California`,
          href: `https://california.tylerhost.net/OfsWeb`
        },
        {
          name: `Georgia`,
          href: `https://efilega.tylerhost.net/ofsweb`
        },
        {
          name: `Idaho`,
          href: `https://idaho.tylerhost.net/ofsweb`
        },
        {
          name: `Illinois`,
          href: `https://illinois.tylerhost.net/OfsWeb`
        },
        {
          name: `Indiana`,

          href: `https://indiana.tylerhost.net/ofsweb`
        },
        {
          name: `Louisiana`,
          href: `https://louisiana.tylerhost.net/ofsweb`
        },
        {
          name: `Maryland`,
          href: `https://maryland.tylerhost.net/ofsweb`
        },
        {
          name: `Massachusetts`,
          href: `https://massachusetts.tylerhost.net/ofsweb`
        },
        {
          name: `Minnesota`,
          href: `https://minnesota.tylerhost.net/ofsweb`
        },
        {
          name: `Nevada`,
          href: `https://nevada.tylerhost.net/ofsweb`
        },
        {
          name: `New Hampshire`,
          href: `https://newhampshire.tylerhost.net/ofsweb`
        },
        {
          name: `New Mexico`,
          href: `https://newmexico.tylerhost.net/ofsweb`
        },
        {
          name: `North Dakota`,
          href: `https://northdakota.tylerhost.net/ofsweb`
        },
        {
          name: `Ohio`,
          href: `https://ohio.tylerhost.net/ofsweb`
        },
        {
          name: `Oregon`,
          href: `https://oregon.tylerhost.net/ofsweb`
        },
        {
          name: `Tribal Courts`,
          href: `https://efile-tribalcourts.tylerhost.net/ofsweb`
        },
        {
          name: `Pennsylvania`,
          href: `https://lehigh.tylerhost.net/ofsweb`
        },
        {
          name: `Rhode Island`,
          href: `https://rhodeisland.tylerhost.net/ofsweb`
        },
        {
          name: `South Dakota`,
          href: `https://southdakota.tylerhost.net/ofsweb`
        },
        {
          name: `Tennessee`,
          href: `https://tennessee.tylerhost.net/ofsweb`
        },
        {
          name: `Texas`,
          href: `https://efile.txcourts.gov/ofsweb`
        },
        {
          name: `Virginia`,
          href: `https://virginia.tylerhost.net/ofsweb`
        }
      ]
    }
  },

  methods: {
    goToUrl(href) {
      window.location.href = href
    }
  }
}
</script>

<style lang="scss" scoped>
main {
  display: flex;
  flex-flow: column;

  width: 100%;
  min-height: 100vh;

  margin: 0;
  padding: 48px 12px;

  color: hsla(210, 10%, 25%, 1);
}

header,
section {
  width: 100%;
  max-width: 600px;
}

header {
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;

  margin: 0 auto;
}

section {
  margin: 32px auto 0;
}

.selectGroup {
  position: relative;

  width: 100%;

  margin: 8px 0 0;

  svg {
    position: absolute;
    top: 50%;
    right: 6px;

    transform: translate(-50%, -50%);

    pointer-events: none;
  }
}

label {
  font-size: 24px;
  font-weight: 600;
}

select {
  all: unset;

  width: 100%;

  padding: 6px 14px;

  border-radius: 6px;

  box-sizing: border-box;

  color: hsla(210, 10%, 25%, 1);

  > option {
    background-color: hsla(210, 100%, 100%, 1);
    color: hsla(210, 10%, 25%, 1);
  }

  &.efile {
    border: 1px solid rgba(16, 120, 192, 0.45);
    background-color: rgba(16, 120, 192, 0.25);

    &:hover {
      border: 1px solid rgba(16, 120, 192, 0.95);
      background-color: rgba(16, 120, 192, 0.75);
      color: hsla(210, 100%, 100%, 1);
    }

    &:focus {
      border: 1px dashed rgba(16, 120, 192, 0.25);
      background-color: rgba(16, 120, 192, 0.75);
      color: hsla(210, 100%, 100%, 1);
    }
  }

  &.reSearch {
    border: 1px solid rgba(192, 16, 16, 0.45);
    background-color: rgba(192, 16, 16, 0.25);

    &:hover {
      border: 1px solid rgba(192, 16, 16, 0.95);
      background-color: rgba(192, 16, 16, 0.75);
      color: hsla(210, 100%, 100%, 1);
    }

    &:focus {
      border: 1px dashed rgba(192, 16, 16, 0.25);
      background-color: rgba(192, 16, 16, 0.75);
      color: hsla(210, 100%, 100%, 1);
    }
  }

  &.guideFile {
    border: 1px solid rgba(16, 192, 23, 0.45);
    background-color: rgba(16, 192, 23, 0.25);

    &:hover {
      border: 1px solid rgba(16, 192, 23, 0.95);
      background-color: rgba(16, 192, 23, 0.75);
      color: hsla(210, 100%, 100%, 1);
    }

    &:focus {
      border: 1px dashed rgba(16, 192, 23, 0.25);
      background-color: rgba(16, 192, 23, 0.75);
      color: hsla(210, 100%, 100%, 1);
    }
  }
}
</style>
