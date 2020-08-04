import React from 'react'
import {useSelector} from "react-redux";
import Loading from "../components/Loading";
import {getDayName,numberWithCommas} from "../utils/utils"
function DisplayData(props) {
  const listCountry = useSelector(state => state.listCountry)
  const {loading,country,success} = listCountry;
  const detailCountry = useSelector(state => state.detailCountry);
  const{loading:loadingDetail,detail,error} = detailCountry;
    return (
        <div>
            <div className="list-data">
            { loadingDetail ? <p className="loading"><Loading/></p> : error ? <p>{error}</p>: detail.map( item => 
               <div className="list-data-info" key={item.id}>
                   <div className="country-info">
                      <p>{item.name}</p>
                      <img src={item.flag} alt="country"/>
                   </div>
                      <ul>
                         <li>
                            <div>
                                <div>Capital</div>
                                <div>Region</div>
                                <div>Population</div>
                            </div>
                            <div>
                                <div>{item.capital}</div>
                                <div>{item.region}</div>
                                <div>{numberWithCommas(item.population)}</div>
                            </div>
                         </li>
                      </ul>
                </div>
                )}
                <div className="list-data-cases">
               {loading ? <p className="loading"><Loading/></p> : error ?  <p>{error}</p> : !success  || country.length === 0 ?  <p style={noticeStyle}>No Data Available</p>:
                country.map(item => 
                  <ul key={item.id}>
                      <li><h3>Cases : {numberWithCommas(item.cases.total)}</h3></li>
                      <li>
                        <div>
                              <i class="fas fa-users fa-4x box orange-box"></i>
                              <div>
                                  <div>Confirmed </div>
                                  <div>{numberWithCommas(item.cases.active)}</div>
                              </div>
                        </div>
                        <div>
                            <i class="fas fa-smile fa-4x box green-box"></i>
                            <div>
                              <div>Recovered</div>
                              <div>{numberWithCommas(item.cases.recovered)}</div>
                            </div>
                        </div>
                        <div>
                          <i class="fas fa-ambulance fa-4x box red-box"></i>
                          <div>
                            <div>Deaths</div>
                            <div>{numberWithCommas(item.deaths.total)}</div>
                          </div>
                        </div>
                      </li>
                      <li>
                         <h5>Last Updated : {getDayName(item.day)}</h5>
                      </li>
                  </ul>
                  )}
                </div>
           </div>
        </div>
    )
}
const noticeStyle ={
    textAlign:'center'
}
export default DisplayData
