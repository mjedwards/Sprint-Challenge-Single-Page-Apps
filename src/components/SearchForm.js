import React, { useState, useEffect } from "react";
import { withFormik, Form, Field } from "formik";
import axios from "axios";

const SearchForm = ({ values, status }) => {
  const [newChar, setNewChar] = useState([]);
  useEffect(() => {
    if (status) {
      setNewChar([status]);
    }
  }, [status]);
  return (
    <div>
      <Form>
        <Field
          type='text'
          name='search'
          placeholder='Search'
          value={values.search}
        />
        <button type='submit'>Search</button>
      </Form>

      {/* {newChar.map(char => (
        <ul key={char.id}>
          <li>{char.search}</li>
        </ul>
      ))} */}
    </div>
  );
};

const FormikSearchForm = withFormik({
  mapPropsToValues({ search }) {
    return {
      search: search || ""
    };
  },

  handleSubmit(values, { setStatus }) {
    axios
      .get(
        `https://rickandmortyapi.com/api/character/?${values.search}`,
        values
      )
      .then(res => {
        setStatus(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }
})(SearchForm);

console.log(FormikSearchForm);

export default FormikSearchForm;
