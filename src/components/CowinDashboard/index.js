import {Component} from 'react'

import Loader from 'react-loader-spinner'

import VaccinationByAge from '../VaccinationByAge'

import VaccinationByGender from '../VaccinationByGender'

import VaccinationCoverage from '../VaccinationCoverage'

import './index.css'

const statusObject = {
  success: 'SUCCESS',
  failure: 'FAILURE',
  progress: 'PROGRESS',
  initial: 'INITIAL',
}

class CowinDashboard extends Component {
  state = {
    status1: statusObject.initial,
    list1: [],
    list2: [],
    list3: [],
  }

  componentDidMount() {
    this.getList()
  }

  getList = async () => {
    const {status1} = this.state
    this.setState({status1: statusObject.progress})
    const url = 'https://apis.ccbp.in/covid-vaccination-data'
    const response = await fetch(url)
    if (response.ok) {
      const value = await response.json()
      console.log(value)
      this.setState({
        list1: value.last_7_days_vaccination,
        list2: value.vaccination_by_age,
        list3: value.vaccination_by_gender,
        status1: statusObject.success,
      })
    } else {
      this.setState({status1: statusObject.failure})
    }
  }

  getProgress = () => (
    <div className="con11">
      <div className="products-loader-container" data-testid="loader">
        <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
      </div>
    </div>
  )

  getSuccess = () => {
    const {status1, list1, list2, list3} = this.state
    return (
      <>
        <VaccinationCoverage value5={list1} />
        <VaccinationByGender value6={list3} />
        <VaccinationByAge value7={list2} />
      </>
    )
  }

  getFailure = () => (
    <div className="con11">
      <img
        src="https://assets.ccbp.in/frontend/react-js/api-failure-view.png"
        className="con9"
        alt="failure view"
      />
      <h1 className="head">Something went wrong</h1>
    </div>
  )

  getSwitches = () => {
    const {status1} = this.state

    switch (status1) {
      case statusObject.success:
        return this.getSuccess()
      case statusObject.progress:
        return this.getProgress()
      case statusObject.failure:
        return this.getFailure()
      default:
        return null
    }
  }

  render() {
    const {status1, list1, list2, list3} = this.state
    console.log(status1)

    return (
      <div className="back">
        <div className="con10">
          <div className="div1">
            <img
              src="https://assets.ccbp.in/frontend/react-js/cowin-logo.png"
              className="img"
              alt="website logo"
            />
            <h1 className="para">Co-WIN</h1>
          </div>
          <h1 className="head">CoWIN Vaccination in India</h1>
        </div>
        <div className="con7">{this.getSwitches()}</div>
      </div>
    )
  }
}

export default CowinDashboard
