import {Component} from 'react'
import Cookies from 'js-cookie'

import {HomeContainer, HomeItem} from './StyledComponent'
import Header from '../Header'
import NavBar from '../NavBar'
import HomeVideos from '../HomeVideos'

class Home extends Component {
  state = {matchList: []}

  componentDidMount() {
    this.getMatchDetails()
  }

  getMatchDetails = async () => {
    const jwtToken = Cookies.get('jwt_token')
    const url = 'https://apis.ccbp.in/videos/all?search='
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(url, options)
    const data = await response.json()
    const updatedData = data.videos.map(eachData => ({
      channel: eachData.channel,
      id: eachData.id,
      thumbnailUrl: eachData.thumbnail_url,
      title: eachData.title,
      viewCount: eachData.view_count,
    }))
    this.setState(prevState => ({
      matchList: [...prevState.matchList, updatedData],
    }))
  }

  render() {
    const {matchList} = this.state

    return (
      <div>
        <NavBar />
        <HomeContainer>
          <Header />
          <HomeItem>
            {matchList.map(eachVideo => (
              <HomeVideos matchVideos={eachVideo} />
            ))}
          </HomeItem>
        </HomeContainer>
      </div>
    )
  }
}

export default Home
