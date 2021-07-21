import React, { Component } from 'react'
import {Carousel} from "antd-mobile"
//import swiper from "assets/swiper-1.png"
import {SwiperWrap} from "./styledCookbook"
import {connect} from "react-redux"
import {GETLIST} from "../action-types"

const mapState = state => ({
    list:state.home.list
  })

const mapDispatch = dispatch => ({
    loadData() {
        dispatch({
            type: GETLIST,
            url: '/api/list'
            })
        }
})
// 使用装饰来来装在上面两个方法
@connect(mapState,mapDispatch)
class Swiper extends Component {
    componentDidMount() {
        this.props.loadData()
      }
    render() {
        return (
            <SwiperWrap >
                {this.props.list.length&&(
                    <Carousel
                        autoplay={false}
                        infinite
                        beforeChange={(from, to) => 
                            console.log(`slide from ${from} to ${to}`)
                        }
                        afterChange={index => 
                            console.log('slide to', index)
                        }
                    >
                      {/*   <img src={swiper}/> */}
                        {/* 5.便利 因为props.list是空数据会没有东西  先看看报错吗*/}
                        {
                            this.props.list.slice(0,5).map((value) => <img key={value.id} src={value.img} alt=""/>)
                    
                        }
                    </Carousel>
                )}
            </SwiperWrap>
           
        )
    }
}
//export default connect(mapState,mapDispatch)(Swiper)
export default Swiper