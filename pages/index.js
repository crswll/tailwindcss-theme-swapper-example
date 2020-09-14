import FeatureSection from '../components/FeatureSection'
import PageHeading from '../components/PageHeading'
import Cta from '../components/Cta'

const updateHtmlClass = theme => {
  const cl = document.documentElement.classList
  cl.remove('dark', 'light', 'geocities')
  cl.add(theme)
}

const Home = () => {
  return (
    <div className="max-w-screen-xl p-3 mx-auto text-dark">
      <div className="mb-2">
        {['spacier', 'squarier'].map(theme => (
          <label key={theme} className="mr-2">
            <input
              type="checkbox"
              onChange={(event) => {
                document.documentElement
                  .classList
                  .toggle(theme, event.target.checked)
              }}
            /> {theme}
          </label>
        ))}
      </div>
      {['light', 'dark', 'geocities'].map(themeName => (
        <button
          key={themeName}
          className="mr-2 rounded bg-surface text-primary p-medium"
          onClick={() => updateHtmlClass(themeName)}
        >{themeName}</button>
      ))}
      <FeatureSection />
      <PageHeading />
      <Cta />
    </div>
  )
}

export default Home
