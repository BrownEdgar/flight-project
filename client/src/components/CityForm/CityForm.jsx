import React from 'react';
import { Formik, Form, Field } from 'formik'
import './CityForm.scss'
import axios from 'axios';


const initialValues = {
  name: '',
  code: '',
}

export default function CityForm({ toggleModal }) {

  const handleSubmit = (values, { resetForm }) => {
    const city = {
      ...values
    }
    axios.post(import.meta.env.VITE_DB_URL + '/cities', city)
      .then(res => {
        console.log(res);
        resetForm()
        toggleModal()
      })
      .catch(err => console.log(err))

  }

  return (
    <div className='CityForm'>
      <Formik
        onSubmit={handleSubmit}
        initialValues={initialValues}
        validateOnChange={false}
      >
        <Form>
          <div>
            <label htmlFor="name">City Name</label>
            <Field name="name" id='name' required />
          </div>
          <div>
            <label htmlFor="code">City code</label>
            <Field name="code" id='code' required />
          </div>
          <div>
            <input type="submit" value='add City' />
          </div>
        </Form>
      </Formik>

    </div>
  )
}
