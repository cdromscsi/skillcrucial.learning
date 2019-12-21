import React, { useState, useEffect } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import Head from './head'
import { getData } from '../redux/reducers/users'

const Dummy = (props) => {
  const [pageIndex, setPageIndex] = useState(0)
  const { getData: getDataProps } = props
  useEffect(() => {
    getDataProps(pageIndex)
  }, [getDataProps, pageIndex])
  return (
    <div className="text-monospace">
      <Head title="Hello" />
      <div> {JSON.stringify(props.isRequesting)} </div>
      <div>Page {pageIndex + 1} of {props.pages}. Users on page: {props.users.length}</div>
      <table className="table table-striped table-bordered">
        <thead className="thead-dark">
          <tr>
            <th>Avatar</th>
            <th>Name</th>
            <th>Email</th>
            <th>Company</th>
            <th>Salary</th>
            <th>Age</th>
            <th>Phone number</th>
            <th>City</th>
          </tr>
        </thead>
        <tbody>
          {
            !props.isRequesting && props.users.map(user => (
              <tr>
                <td><img className="rounded-circle" src={user.avatar} alt="" /></td>
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
        </tbody>
      </table>
      <button
        type="button"
        /* onClick={() => setPageIndex(Math.max(0, +pageIndex - 1))} */
        onClick={() => setPageIndex(+pageIndex - 1)}
        disabled={+pageIndex === 0}
      >
        Previous
      </button>
      <button
        type="button"
        /* onClick={() => setPageIndex(Math.min(9, +pageIndex + 1))} */
        onClick={() => setPageIndex(+pageIndex + 1)}
        disabled={(+pageIndex + 1) === props.pages}
      >
        Next
      </button>
      <img src={`/tracker/${pageIndex}.gif`} alt="tracker" />
    </div>
  )
}

Dummy.propTypes = {}

const mapStateToProps = state => ({
  users: state.users.list,
  isRequesting: state.users.isRequesting,
  pages: state.users.pages
})

const mapDispatchToProps = dispatch => bindActionCreators({
  getData
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Dummy)
