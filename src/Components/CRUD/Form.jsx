import { useEffect, useState } from "react";
const initialState = {
  name: "",
  Age: "",
};
function Form({ addValue, editable, updateValue, setEditable }) {
  const [values, setValues] = useState(initialState);

  function handleSubmit(e) {
    e.preventDefault();
    if (editable) {
      updateValue(values);
    } else {
      addValue(values);
    }
    setValues(initialState);
    setEditable(null);
    // console.log(values);
  }
  function handleChange(e) {
    e.preventDefault();
    console.log({ ...values, [e.target.name]: e.target.value });
    setValues({ ...values, [e.target.name]: e.target.value });
  }
  function handleClear(e) {
    e.preventDefault();
    setValues(initialState);
  }

  useEffect(() => {
    if (editable) {
      setValues(editable);
    }
  }, [editable]);

  return (
    <>
      <form>
        <input
          type="text"
          onChange={handleChange}
          name="name"
          value={values.name}
        />
        <input
          type="text"
          onChange={handleChange}
          name="Age"
          value={values.Age}
        />

        <button onClick={handleSubmit}>{editable ? "Update" : "Add"}</button>
        <button onClick={handleClear}>Clear</button>
      </form>
    </>
  );
}

export default Form;
