// @flow
import * as React from 'react';
import {
  HashRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import * as qs from 'query-string';
import './index.scss';

class Cars extends React.Component{
  state = {
    colors: [
      {color: 'blue', checked: false},
      {color: 'black', checked: false},
      {color: 'red', checked: false},
      {color: 'yellow', checked: false},
      {color: 'green', checked: false},
    ],
    errors: [],
    numbers: [1, 2, 3, 4, 5]
  }

  componentWillMount = () => {
    this.updateCheckbox(this.props.location)
  }

  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      this.onRouteChanged();
    }
  }

  onRouteChanged() {
    console.log('calling..');
    //this.updateCheckbox(this.props.location)
  }

  filterCars = (cars, color) => {
    if (color) {
      return cars.filter(car => color.includes(car.color))
    }
    return cars;
  }

  updateCheckbox = (location) => {
    if (location.search){
      const param = qs.parse(location.search);
      const params = param.color.split(',')
      let foundColor;
      params.map((param) => {
        const color = param;
        let colors = [...this.state.colors];
        let findColor = this.state.colors.filter(col => col.color == color)
        let col = this.state.colors.find(col => col.color == findColor[0].color)
        foundColor = findColor;
        col.checked = !col.checked;
        findColor = col;
        this.setState({findColor})
      })
      let uncheckColors = this.state.colors.filter(color => color.color != foundColor.color)
      uncheckColors.map((uncheckColor) => {
        uncheckColors.checked = false
        this.setState({uncheckColor})
      })
    }
  }

  getParams = (location) => {
    const param = qs.parse(location.search);
    return param.color;
  }

  updateParams = (history) => {
    let params = [];
    this.state.colors.map(color => {
      if(color.checked){
        params.push(color.color)
      }
    })
    const newParams = params.join(',');
    if (newParams.length != 0){
      history.push({
        pathname: '/cars',
        search: `?color=${newParams}`
      })
    } else {
      history.push({
        pathname: '/cars',
        search: ''
      })
    }
  }

  toggleColor = (colorValue) => {
    const color = colorValue.target.value;
    let colors = [...this.state.colors];
    let findColor = this.state.colors.filter(col => col.color == color)
    let col = this.state.colors.find(col => col.color == findColor[0].color)
    col.checked = !col.checked;
    findColor = col;
    this.setState({findColor})
  }

  tempfunc = () => {
    this.state.numbers.forEach((number) => {
      this.setState(prevState => ({
        errors: [...prevState.errors, {departmentRow: number, departmentError: 'error msg'}]
      }))
    })
  }

  render() {
    console.log(this.state.errors, 'err');
    const { cars, location, history } = this.props;
    return(
      <div className="filters">
        <div onChange={(e) => this.updateParams(history)}>
          {this.state.colors.map((color, index) => (
            <div key={index}>
              <input
                checked={color.checked}
                type="checkbox"
                value={color.color}
                name="color"
                onChange={(e) => this.toggleColor(e)}/>
                {color.color}
            </div>
          ))}
        </div>
        <input placeholder="search for car"/>
        <div className="carsContainer">
          {this.filterCars(cars, this.getParams(location)).map((car, index) => (
            <div key={index} className={`carContainer ${car.color}`}>{car.make} {car.model}</div>
          ))}
        </div>
        <button onClick={this.tempfunc}>start temp...</button>
        <div>
          { this.state.errors &&
            this.state.errors.length ?
            <div>
              {this.state.errors.map((error) => {
                return <div>there was a content type error for department row {error.departmentRow}: {error.departmentError}</div>
              })}
            </div>
            :
            null
          }
        </div>
      </div>
    )
  }
}

export default Cars;
