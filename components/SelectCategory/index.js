import React, { useState } from 'react'

import { Select, Option } from './styles'
import { useRouter } from 'next/router'

const SelectCategory = ({ text, category }) => {

  let categories = ['all', 'cars', 'camera', 'phone','cookware','motocycles','tv']
  const router = useRouter()

  const redirect = (cat) => {
    router.push(`/search/${text}/${cat}`)
  }

  const handleChange = (event) => {
    redirect(event.target.value)
  }

  return (
    <>
      <Select onChange={handleChange}>
        {categories.map((cat) => (
          <Option key={cat.id} value={cat}>{cat}</Option>
        ))}
      </Select>
    </>
  )
}

export default SelectCategory
