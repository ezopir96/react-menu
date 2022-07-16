import React from 'react'
import TopNavBar from '@/components/TopNavBar'
import { getGoodFoodDetailApi } from '@/services/feedService'
import Content from './components/Content'
import connect from './connect'

@connect
class Detail extends React.Component {

  state = {
    food: {},
    waiting: false
  }

  constructor (props) {
    super(props)
    this.getData = this.getData.bind(this)
    this.likeFood = this.likeFood.bind(this)
    this.unlikeFood = this.unlikeFood.bind(this)
  }

  componentDidMount () {
    this.getData()
  }

  getData = async () => {
    const { id } = this.props.match.params
    await getGoodFoodDetailApi(id).then(res => ({res}))
      .then(res => {
        const food = res.res.data
        this.setState({ food })
      })
      .catch(err => {
        console.log(err)
      })
  }

  likeFood = (e) => {
    console.log(this.state.waiting)
    if (this.state.waiting) return
    const { id } = this.props.match.params
    const { uid } = this.props
    this.setState({ waiting: true })
    this.props.likeFoodAction({ uid, lid: id })
      .then((err, res) => {
        console.log(err)
        this.setState({ waiting: false })
      })
  }

  unlikeFood (e) {

    if (this.state.waiting) return

    const { id } = this.props.match.params
    const { uid } = this.props

    if (this.state.waiting) return
    this.setState({ waiting: true })

    this.props.unlikeFoodAction({ uid, lid: id })
      .then((err, res) => {
        console.log(err)
        this.setState({ waiting: false })
      })
  }

  render () {
    console.log(this.props)
    const { id } = this.props.match.params
    return (
      <>
        <TopNavBar leftText='返回' onLeft={() => this.props.history.goBack()}>详情信息</TopNavBar>
        <Content
          lid={ id }
          likes_id={this.props.likes_id}
          uid={this.props.uid}
          data={this.state.food}
          likeFood={ this.likeFood }
          unlikeFood={ this.unlikeFood }></Content>
      </>
    )
  }
}
export default Detail