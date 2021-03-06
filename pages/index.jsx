import { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import Div100vh from 'react-div-100vh'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faAngleRight,
  faExternalLinkAlt,
  faLongArrowLeft,
  faMoon,
  faSun,
} from '@fortawesome/pro-duotone-svg-icons'
import { ThemeContext } from '@contexts/ThemeContext'
import { CategoryButton } from '@components/CategoryButton'
import { darkTheme } from '@stitches'
import { ThemeToggle } from '@components/ThemeToggle'
import { styled } from '@stitches'

const WrapperDiv = styled(Div100vh, {
  width: `100%`,
  backgroundColor: `$pageBg`,
  margin: 0,
  padding: 0,
  fontFamily: `Lato, sans-serif`,
  transition: `background-color 150ms ease-in-out`,
})

const MainCard = styled(`section`, {
  position: `relative`,
  zIndex: 50,
  width: `100%`,
  maxWidth: `36rem`,
  overflow: `hidden`,
  overflowY: `scroll`,
  backgroundColor: `$bg`,
  border: `1px solid $borderColor`,
  transition: `all 150ms ease-in-out`,
})

const Home = ({ categories, links }) => {
  const { theme, setTheme } = useContext(ThemeContext)
  const [activeCategory, setActiveCategory] = useState(null)
  const [activeLinks, setActiveLinks] = useState([])

  useEffect(() => {
    const filteredLinks = links.filter(
      (link) => link.linkCategory.id === activeCategory?.id,
    )

    setActiveLinks(filteredLinks)
  }, [activeCategory])

  const handleCategoryClick = (category) => {
    if (activeCategory?.id === category.id) {
      setActiveCategory(null)
    } else {
      setActiveCategory(category)
    }
  }

  return (
    <div className={theme === `dark` && `${darkTheme} dark`}>
      <WrapperDiv>
        <main
          style={{
            display: `grid`,
            gridTemplateColumns: `1`,
            gridTemplateRows: `1`,
            alignItems: `center`,
            padding: `0 1rem 1rem`,
            height: `100%`,
          }}
        >
          <div
            style={{
              position: `relative`,
              height: `auto`,
              margin: `0 auto`,
              transform: `translateX(${activeCategory?.id ? `-25%` : `0`})`,
              transition: `transform 300ms ease-in-out`,
            }}
          >
            <MainCard>
              <header style={{ position: `sticky`, top: 0, zIndex: 50 }}>
                <img
                  src="/esolutions.png"
                  alt="eSoutions quick links banner."
                  style={{ width: `100%` }}
                />
              </header>

              <ThemeToggle />

              <div style={{ marginTop: `3rem,` }}>
                {categories.map((category) => (
                  <CategoryButton
                    key={category.id}
                    onClick={() => handleCategoryClick(category)}
                    state={activeCategory?.id === category.id && `active`}
                  >
                    <span>{category.name}</span>

                    <FontAwesomeIcon icon={faAngleRight} fixedWidth={true} />
                  </CategoryButton>
                ))}
              </div>
            </MainCard>

            <section
              style={{
                position: `absolute`,
                zIndex: 30,
                top: 0,
                right: 0,
                display: `flex`,
                flexFlow: `column`,
                justifyItems: `start`,
                alignItems: `stretch`,
                overflow: `hidden`,
                width: `24rem`,
                height: `calc(100% - 4rem)`,
              }}
              className={`transition-transform transition-opacity duration-300 absolute z-30 top-0 right-0 flex flex-col justify-start items-stretch overflow-hidden w-full sm:w-96 my-8 sm:pl-24 bg-white dark:bg-coolGray-1000 border border-coolGray-200 dark:border-coolGray-800 border-opacity-50 dark:border-opacity-50 shadow-xl ${
                activeCategory?.id &&
                `transform translate-x-full sm:translate-x-3/4`
              }`}
            >
              <header className="px-8 py-4 flex flex-row justify-start items-center text-coolGray-800 dark:text-coolGray-200 text-sm uppercase">
                <button onClick={() => setActiveCategory(null)}>
                  <FontAwesomeIcon
                    icon={faLongArrowLeft}
                    fixedWidth={true}
                    className="mr-2"
                  />
                  {` `}
                  Close
                </button>
              </header>

              {activeLinks && (
                <div className="grid grid-cols-1 auto-rows-max flex-grow overflow-scroll mt-4">
                  {activeLinks.map((link) => (
                    <a
                      href={link.url}
                      key={link.id}
                      className="w-full px-8 py-3 flex flex-row justify-between items-center text-sm font-bold bg-transparent hover:bg-coolGray-100 dark:hover:bg-coolGray-900 text-coolGray-700 dark:text-coolGray-300 group"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <span>{link.name}</span>

                      <FontAwesomeIcon
                        icon={faExternalLinkAlt}
                        fixedWidth={true}
                        className="text-xs opacity-0 group-hover:opacity-100"
                      />
                    </a>
                  ))}
                </div>
              )}
            </section>
          </div>
        </main>
      </WrapperDiv>
    </div>
  )
}

export default Home

export const getStaticProps = async () => {
  const { linkCategories } = await axios
    .post(process.env.NEXT_PUBLIC_GRAPH_CMS_API_ENDPOINT, {
      query: `{
        linkCategories(stage: PUBLISHED) {
          id
          name
        }
      }`,
    })
    .then((res) => res.data.data)

  const { links } = await axios
    .post(process.env.NEXT_PUBLIC_GRAPH_CMS_API_ENDPOINT, {
      query: `{
        links(stage: PUBLISHED, orderBy: name_ASC) {
          id
          name
          url
          linkCategory {
            id
            name
          }
        }
      }`,
    })
    .then((res) => res.data.data)

  return {
    props: {
      categories: linkCategories,
      links,
    },
  }
}
