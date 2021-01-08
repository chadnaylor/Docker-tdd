

import React from 'react'
import { shallow } from 'enzyme'
import App from './App'
//import app from '../../api/app'
//import Home from './components/Home'

describe('App', () => {
  let appWrapper
  beforeEach(() => {
    appWrapper = shallow(<App />)
  })
  it('has state and is not empty', () => {
    const State = appWrapper.state()
    expect(State).not.toBeNull()
  })

  it('gets books from backend on mount', async () => {

    const spy = jest.spyOn(App.prototype, 'componentDidMount');

    await appWrapper.instance().componentDidMount();
    expect(spy).toHaveBeenCalled();
    appWrapper.update()
    expect(appWrapper.state('books').length).toBeGreaterThan(0);


    // const Home = appWrapper.find(Home)
    // expect(Home.props().books).toEqual(State.books)
  })





})
