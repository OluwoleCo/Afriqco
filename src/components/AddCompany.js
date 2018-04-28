import React, {Component} from 'react';
import HTTP from '../services/http'
// 1. Setup a Form where a user can upload images/text
// 2. Send form data over to express server via POST API
// 3. Receive form data in express and upload to cloudinary
// 4. Get cloudinary callback with url for image
// 5. Save rest of form data + cloudinary_image_url to database


//Cant post to DB returning null

class AddCompany extends Component {
  constructor() {
    super()
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  
  handleSubmit(e) {
    e.preventDefault();
    let url = 'companies'

    let name = this.refs.name.value;
    let description = this.refs.description.value;
    let industry = this.refs.industry.value;
    let founded = this.refs.founded.value;
    let country = this.refs.country.value;
    let funding = this.refs.funding.value;
    let ceo = this.refs.ceo.value;
    let employees = this.refs.employees.value;
    let website = this.refs.website.value;
    let blurb = this.refs.blurb.value;
    let image = this.refs.image.value;
    console.log(name)
    console.log(description)
    let payload = {
        name: name,
        description,
        industry,
        founded,
        country,
        funding,
        ceo,
        employees,
        website,
        blurb,
        image

      }




      console.log(payload)

    HTTP.post(url, payload)
  }

  render() {
    return (
      <div>
        <h1>Create Company</h1>
  
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Name of Company"
            ref='name'
          />
          <input
            type="text"
            placeholder="Description of Company"
            ref='description'
          />
          <input
            type="text"
            placeholder="Industry"
            ref='industry'
          />
          <input
            type="text"
            placeholder="Founded"
            ref='founded'
          />
          <input
            type="text"
            placeholder="Country"
            ref='country'
          />
          <input
            type="text"
            placeholder="Funding"
            ref='funding'
          />
          <input
            type="text"
            placeholder="CEO"
            ref='ceo'
          />
          <input
            type="text"
            placeholder="Employees"
            ref='employees'
          />
          <input
            type="text"
            placeholder="Website"
            ref='website'
          />
          <input
            type="text"
            placeholder="Blurb"
            ref='blurb'
          />
          <input
            type="text"
            placeholder="Images:)"            
            ref='image'
          />
          
  
          <button
            type="submit"
          >
            Submit
          </button>
        </form>
  
      </div>
    )
  }
}

export default AddCompany;