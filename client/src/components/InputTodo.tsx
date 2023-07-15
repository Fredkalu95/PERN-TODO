import React, { FormEvent, Fragment, useState } from "react";

export const InputTodo = () => {
  const [description, setDescritption] = useState("");

  const onSubmitForm = async(e: FormEvent<HTMLFormElement>) => {
 
    e.preventDefault();
    try {
      const body : { description: string } = {description};
      const response = await fetch("pern-todo-api.vercel.app:5000/todos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      setDescritption("")
      
    } catch (err) {
      /* empty */
      console.log(err);
    }
  };

  return (
    <Fragment>
      <h1 className="text-center mt-5">InputTodo List</h1>
      <form
        className="d-md-flex mt-5 needs-validation"
        noValidate
        // eslint-disable-next-line @typescript-eslint/no-misused-promises
        onSubmit={onSubmitForm}
      >
        <input
          value={description}
          onChange={(e) => setDescritption(e.target.value)}
          type="text"
          className="form-control form-control-md mr-2"
          placeholder="Enter todo description"
          aria-label=".form-control-sm example"
          id="validationCustom01"
          required
        />
        <div className="invalid-feedback">Please provide a valid city.</div>
        <button type="submit" className="btn btn-success btn-sm">
          Add
        </button>
      </form>
    </Fragment>
  );
};
