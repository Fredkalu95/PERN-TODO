import { FormEvent, Fragment, useState } from "react";

export const InputTodo = () => {
  const [description, setDescritption] = useState("");

  const onSubmitForm = async(e: FormEvent<HTMLFormElement>) => {
 
    e.preventDefault();
    try {
      const body : { description: string } = {description};
      await fetch("https://pern-todo-api.vercel.app/todos", {
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
        <button type="submit" className="btn btn-success btn-sm">
          Add
        </button>
      </form>
    </Fragment>
  );
};
