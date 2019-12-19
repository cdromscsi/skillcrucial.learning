import React, { useState, useEffect } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import Head from './head'
import { getData } from '../redux/reducers/users'

const Dummy = (props) => {
  const [counter] = useState(1)
  const { getData: getDataProps } = props
  useEffect(() => {
    getDataProps()
  }, [getDataProps])
  return (
    <div>
      <Head title="Hello" />
      <div> {JSON.stringify(props.isRequesting)} </div>
      <div> Hello World {counter} </div>
      <table>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Company</th>
          <th>Salary</th>
          <th>Age</th>
          <th>Phone number</th>
          <th>City</th>
        </tr>
        {
          props.users.map(user => (
            <tr>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.company}</td>
              <td>{user.salary}</td>
              <td>{user.age}</td>
              <td>{user.phoneNumber}</td>
              <td>{user.city}</td>
            </tr>
          ))
        }
      </table>
      <img src={`/tracker/${counter}.gif`} alt="tracker" />
    </div>
  )
}

Dummy.propTypes = {}

const mapStateToProps = state => ({
  users: state.users.list,
  isRequesting: state.users.isRequesting
})

const mapDispatchToProps = dispatch => bindActionCreators({
  getData
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Dummy)
