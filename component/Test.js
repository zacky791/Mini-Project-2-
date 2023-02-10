import React from 'react';
import { useController, Control, useFieldArray } from 'react-hook-form';
import * as yup from 'yup';

const schema = yup.object().shape({
  details: yup.array().of(
    yup.object().shape({
      name: yup.string().required(),
      age: yup.number().required()
    })
  )
});

const Test = () => {
  const { control, handleSubmit, errors } = useController({
    defaultValues: {
      details: [{ name: '', age: '' }]
    },
    validationSchema: schema
  });
  
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'details'
  });
  
  const onSubmit = data => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {fields.map((item, index) => (
        <div key={item.id}>
          <Control
            name={`details[${index}].name`}
            placeholder="Name"
            as="input"
            type="text"
            control={control}
            error={errors.details && errors.details[index] && errors.details[index].name}
          />
          <Control
            name={`details[${index}].age`}
            placeholder="Age"
            as="input"
            type="number"
            control={control}
            error={errors.details && errors.details[index] && errors.details[index].age}
          />
          <button type="button" onClick={() => remove(index)}>
            Remove
          </button>
        </div>
      ))}
      <button type="button" onClick={() => append({ name: '', age: '' })}>
        Add
      </button>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Test

{Object.entries(getDataFormToZustand).map(([key,value], index)=> 
  <>
  {/* <ForDataDisplay key={index} value={value[index]} /> */}
  {/* <div>{`${key} 1 : ${setProfilePicture(value[0].profilePicture)} `}</div> */}
  <div>{`Profile Picture :  `}</div>
  {/* <img src={previewPicture} /> */}
  {value.map((data, i) => (
    <>
      <div>{`Name : ${data.name}`}</div>
      <div>{`Age : ${data.age}`}</div>
      <div>{`Gender : ${data.gender}`}</div>
    </>
  ))}
  </>
  )}