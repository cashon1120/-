import * as React from 'react'
import './style.scss'

class Product extends React.Component {

  public onChange(e : any) {
    console.log(e)
  }

  public render() {
    return (
      <React.Fragment>
        <div className="outer-bg-gray">
          <div className="container" style={{
            paddingTop: 90
          }}>
            <h1 className="title" id="tag1">汽车行业</h1>
            <ul className="solution-list">
              <li>
                <h3>高速公路自动巡航（HWA）高精度定位解决方案</h3>
                高可用<br/>
                高覆盖<br/>
                精准纵向定位<br/>
                安全协同<br/>
                高兼容架构<br/>
              </li>
              <li>
                <h3>车路协同（V2X）高精度定位解决方案</h3>
                360°位置感知<br/>
                高准确预测<br/>
                高频动态更新<br/>
                车路时间同步<br/>
              </li>
              <li>
                <h3>自主代客泊车（AVP）高精度定位解决方案</h3>
                高精度车辆定位<br/>
                精准航姿识别<br/>
                无缝室内外定位技术切换<br/>
                高精度地图<br/>
                监控与报警<br/>
              </li>
              <li>
                <h3>高级自动驾驶（HAD）高精度定位解决方案</h3>
                极致性能<br/>
                高可靠<br/>
                完好性<br/>
                功能安全<br/>
              </li>
              <li>
                <h3>高速公路自动巡航（HWA）高精度定位解决方案</h3>
                高可用<br/>
                高覆盖<br/>
                精准纵向定位<br/>
                安全协同<br/>
                高兼容架构<br/>
              </li>
              <li>
                <h3>车路协同（V2X）高精度定位解决方案</h3>
                360°位置感知<br/>
                高准确预测<br/>
                高频动态更新<br/>
                车路时间同步<br/>
              </li>
              <li>
                <h3>自主代客泊车（AVP）高精度定位解决方案</h3>
                高精度车辆定位<br/>
                精准航姿识别<br/>
                无缝室内外定位技术切换<br/>
                高精度地图<br/>
                监控与报警<br/>
              </li>
              <li>
                <h3>高级自动驾驶（HAD）高精度定位解决方案</h3>
                极致性能<br/>
                高可靠<br/>
                完好性<br/>
                功能安全<br/>
              </li>
            </ul>
          </div>
        </div>

        <div className="outer-bg-white">
          <div className="container">
            <h1 className="title" id="tag2">农业</h1>
            <ul className="solution-list">
              <li>
                <h3>高速公路自动巡航（HWA）高精度定位解决方案</h3>
                高可用<br/>
                高覆盖<br/>
                精准纵向定位<br/>
                安全协同<br/>
                高兼容架构<br/>
              </li>
              <li>
                <h3>车路协同（V2X）高精度定位解决方案</h3>
                360°位置感知<br/>
                高准确预测<br/>
                高频动态更新<br/>
                车路时间同步<br/>
              </li>
              <li>
                <h3>植保无人机精准作业解决方案</h3>
                高精度车辆定位<br/>
                精准航姿识别<br/>
                无缝室内外定位技术切换<br/>
                高精度地图<br/>
                监控与报警<br/>
              </li>
              <li>
                <h3>云端一体化农田数据解决方案</h3>
                极致性能<br/>
                高可靠<br/>
                完好性<br/>
                功能安全<br/>
              </li>
              <li>
                <h3>高速公路自动巡航（HWA）高精度定位解决方案</h3>
                高可用<br/>
                高覆盖<br/>
                精准纵向定位<br/>
                安全协同<br/>
                高兼容架构<br/>
              </li>
              <li>
                <h3>车路协同（V2X）高精度定位解决方案</h3>
                360°位置感知<br/>
                高准确预测<br/>
                高频动态更新<br/>
                车路时间同步<br/>
              </li>
              <li>
                <h3>自主代客泊车（AVP）高精度定位解决方案</h3>
                高精度车辆定位<br/>
                精准航姿识别<br/>
                无缝室内外定位技术切换<br/>
                高精度地图<br/>
                监控与报警<br/>
              </li>
              <li>
                <h3>高级自动驾驶（HAD）高精度定位解决方案</h3>
                极致性能<br/>
                高可靠<br/>
                完好性<br/>
                功能安全<br/>
              </li>
            </ul>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default Product