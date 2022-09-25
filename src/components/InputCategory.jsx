import React, {useState} from 'react'
import { Select, Label } from 'flowbite-react'
import { useDispatch } from 'react-redux'
import { setQuizCategory, setQuizType } from '../redux/quizSlice'

export const InputCategory = (props) => {
  const {label} = props
  const [value, setValue] = useState('')
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setValue(e.target.value)
    switch (label){
      case 'Category':
        dispatch(setQuizCategory({
          quizCategory: e.target.value
        }));
        break
      case 'Type':
        dispatch(setQuizType({
          quizType: e.target.value
        }));
        console.log('type')
        break
      default:
        console.log('default')

    }
  }
  return (
    <div id="select">
      <div className="mb-2 block">
        <Label
          htmlFor="categories"
          value={label}
        />
      </div>
      <Select
        id="categories"
        required={true}
        value={value}
        label={label}
        onChange={(e) => handleChange(e)}
      >
        {props.options && props.options.map((item, index) => {
          return (
            <option key={index} value={item.id}>{item.name}</option>
          )
        })}
      </Select>
    </div>
  )
}
