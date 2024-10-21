//1. For displaying the data use map
//2. for addinmg the values
//3. for deleting
//3. for editing and updating

import data from "./Name";
import Form from "./Form";
import { useState } from "react";

export default function Crud() {
  const [value, setValue] = useState(data);
  const [editable, setEditable] = useState(null);

  function addValue(values) {
    console.log(values);
    setValue([
      ...value,
      {
        ...values,
        id: value.length + 1,
      },
    ]);
  }

  function handleDelete(id) {
    if (confirm("Are you sure you want to delete this user?")) {
      const dt = value.filter((item) => item.id !== id);
      setValue(dt);
    }
  }
  function editValue(id) {
    const dt = value.find((item) => item.id === id);
    console.log(dt);
    setEditable(dt);
  }
  function updateValue(values) {
    const index = value.findIndex((item) => item.id === values.id);
    console.log(index);
    const newValue = [...value];
    newValue.splice(index, 1, values);
    // console.log(newValue);
    setValue(newValue);
  }

  return (
    <>
      <Form
        addValue={addValue}
        // editValue={editValue}
        editable={editable}
        setEditable={setEditable}
        updateValue={updateValue}
      ></Form>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Delete</th>
            <th>Edit</th>
          </tr>
        </thead>
        {value.map((tdata) => (
          <tbody key={tdata.id}>
            <tr>
              <td>{tdata.id}</td>
              <td>{tdata.name}</td>
              <td>{tdata.Age}</td>
              <td>
                <button onClick={() => handleDelete(tdata.id)}>Delete</button>
              </td>
              <td>
                <button onClick={() => editValue(tdata.id)}>Edit</button>
              </td>
            </tr>
          </tbody>
        ))}
      </table>
    </>
  );
}
