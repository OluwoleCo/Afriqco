import React from 'react';

const AddCompany = () => {
  return (
    <div>
      <h1>Create Commpany</h1>

      <form>
        <input
          type="text"
          placeholder="Write the title of your post"
          onChange={ this.handleChange }
          value={ this.state.title }
        />
        <button
          type="submit"
          onClick={ this.handleSubmit }
        >
          Submit
        </button>
      </form>

    </div>
  )
}