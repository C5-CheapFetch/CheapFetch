import { useContext } from 'react'
import { Select, Option } from './styles'
import { useRouter } from 'next/router'
import { DataContext } from '../../pages/_app'

const SelectCategory = ({ text, category }) => {
  const { categories } = useContext(DataContext)

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
        <option disabled selected>
          Select Category
        </option>
        {categories.map((cat) => (
          <Option  value={cat}  key={cat.id}>
            {cat}
          </Option>
        ))}
      </Select>
    </>
  )
}

export default SelectCategory
