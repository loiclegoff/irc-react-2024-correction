import React, { useState } from 'react';
import { Button, InputGroup, Form } from 'react-bootstrap';

function App(props) {
  // state is initialized by a props
  const [title, setTitle] = useState(props.title);

  const handleChangeTitle = (e) => {
    // this.setState allows us to update the state value
    setTitle(e.target.value);
  };

  return (
    <div className="App">
      <h1> this is my first React Component </h1>
      <label htmlFor="titleInput">Title</label>
      <InputGroup className="mb-3">
        <Form.Control
          placeholder="Username"
          aria-label="Username"
          aria-describedby="basic-addon1"
          onChange={handleChangeTitle}
          value={title}
        />
      </InputGroup>
      <h3>{title}</h3>
      <Button>Test</Button>
    </div>
  );
}
export default App;
