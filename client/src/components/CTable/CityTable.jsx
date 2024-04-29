import React from 'react'
import PropTypes from 'prop-types'
import './CityTable.scss'

export default function CityTable({ data, handleDelete }) {
  return (
    <div className='CityTable'>
      <table>
        <thead>
          <tr>
            <th>N</th>
            <th>City</th>
            <th>Code</th>
            <th>delete</th>
          </tr>
        </thead>
        <tbody>
          {data.map(city => {
            return (
              <tr key={city.id}>
                <td>{city.id}</td>
                <td>{city.name}</td>
                <td>{city.code}</td>
                <td className='delete'>
                  <button className='btn btn__delete' onClick={() => handleDelete(city.id)}>
                    <i className="bi bi-x-lg"></i>
                  </button>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}


CityTable.defaultProps = {
  data: []
}

CityTable.proptypes = {
  data: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      code: PropTypes.string.isRequired,
    })
  )
}