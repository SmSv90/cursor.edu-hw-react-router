import React, { Component } from "react";
import Contact from "./Contact";

class Contacts extends Component {

  state = {
    contacts: [{
      firstName: "Барней",
      lastName: "Стинсовський",
      phone: "+380956319521",
      gender: "male"
    }, {
      firstName: "Робін",
      lastName: "Щербатська",
      phone: "+380931460123",
      gender: "female"
    }, {
      firstName: "Анонімний",
      lastName: "Анонімус",
      phone: "+380666666666"
    }, {
      firstName: "Лілія",
      lastName: "Олдровна",
      phone: "+380504691254",
      gender: "female"
    }, {
      firstName: "Маршен",
      lastName: "Еріксонян",
      phone: "+380739432123",
      gender: "male"
    }, {
      firstName: "Теодор",
      lastName: "Мотсбес",
      phone: "+380956319522",
      gender: "male"
    }],
    search: ""
  }

  searchValue = (elem, value) => {
    return elem.toLowerCase().includes(value.toLowerCase());
  }

  handleSearchChange = e => {
    this.setState({ search: e.target.value }, () => {
    })
  }

  handleFilter = () => {
    const result = this.state.contacts.filter((contact) => {
      const firstName = this.searchValue(contact.firstName, this.state.search);
      const lastName = this.searchValue(contact.lastName, this.state.search);
      const phone = this.searchValue(contact.phone, this.state.search);
      return (firstName || lastName || phone) || false;
    })
    return result;
  }

  render() {
    let filteredContacts = this.state.contacts;
    if (this.state.search.length > 0) {
      filteredContacts = this.handleFilter()
    }
    return (
      <div>
        <div className="input-block">
          <input type="text" placeholder="search" value={this.state.search} onChange={this.handleSearchChange} className="input-search" />
        </div>
        {filteredContacts.map(contact => <Contact {...contact} />)}
      </div>
    )
  }

}

export default Contacts;