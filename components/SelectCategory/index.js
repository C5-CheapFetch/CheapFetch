import React from 'react'
import { ServerStyleSheet } from 'styled-components'

import { Select, Option } from './styles'

const SelectCategory = ({ categories }) => {

  categories = ['cellphones', 'tvs', 'cars', 'cameras']

  return(
    <React.Fragment>
      <Select>
        {
          categories.map( (cat) => (
            <Option value={cat}>{cat}</Option>
          ))
        }
      </Select>
    </React.Fragment>
  )
}

export default SelectCategory