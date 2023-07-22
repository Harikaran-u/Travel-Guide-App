import {Component} from 'react'
import Loader from 'react-loader-spinner'
import TravelItem from '../TravelItem'

import './index.css'

const travelGuidePackagesApiUrl = 'https://apis.ccbp.in/tg/packages'
const loader = (
  <div data-testid="loader">
    <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
  </div>
)

class TravelGuide extends Component {
  state = {isLoading: true, packagesData: []}

  componentDidMount() {
    this.getTravelGuide()
  }

  snakeCaseToCamelCase = packages => {
    const updatedPackages = packages.map(eachPackage => ({
      id: eachPackage.id,
      description: eachPackage.description,
      imageUrl: eachPackage.image_url,
      name: eachPackage.name,
    }))
    this.setState({isLoading: false, packagesData: updatedPackages})
  }

  getTravelGuide = async () => {
    const response = await fetch(travelGuidePackagesApiUrl)
    const data = await response.json()
    console.log(data.packages)
    this.snakeCaseToCamelCase(data.packages)
  }

  render() {
    const {packagesData, isLoading} = this.state
    const app = (
      <div className="main-container">
        <h1 className="title">Travel Guide</h1>
        {isLoading ? (
          loader
        ) : (
          <ul className="package-list-container">
            {packagesData.map(eachCity => (
              <TravelItem key={eachCity.id} city={eachCity} />
            ))}
          </ul>
        )}
      </div>
    )
    return app
  }
}

export default TravelGuide
