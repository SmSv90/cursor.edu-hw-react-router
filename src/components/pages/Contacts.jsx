import React, { Component } from "react";
import { Link } from "react-router-dom";
import Contact from "./Contact";

class Contacts extends Component {

  state = {
    contacts: [{
      firstName: "Барней",
      lastName: "Стинсовський",
      phone: "+380956319521",
      gender: "male",
      description: "Barney tells fake history lessons, complicated lies, and deceptions with total confidence, and stubbornly sticks by   even if they are completely nonsensical and over-exaggerated.",
      messages: "This is going to be legen... wait for it ...dary!"
    }, {
      firstName: "Робін",
      lastName: "Щербатська",
      phone: "+380931460123",
      gender: "female",
      description: "Robin is tomboyish, hardcore and sarcastic",
      messages: "I don't know where I'm gonna be in five years. I don't wanna know. I want my life to be an adventure."
    }, {
      firstName: "Анонімний",
      lastName: "Анонімус",
      phone: "+380666666666",
      gender: "incognito",
      description: "Guy Fawkes...maybe",
      messages: "The Gunpowder Plot must be blow"
    }, {
      firstName: "Лілія",
      lastName: "Олдровна",
      phone: "+380504691254",
      gender: "female",
      description: "Despite her small, cute-like appearance, Lily is far from innocent",
      messages: "We struggle so hard to hold on to these things that we know are gonna disappear eventually. And that’s really noble."
    }, {
      firstName: "Маршен",
      lastName: "Еріксонян",
      phone: "+380739432123",
      gender: "male",
      description: "Marshall is very polite since he has grown up in Minnesota",
      messages: "That’s life, you know. We never end up where you thought you wanted to be"
    }, {
      firstName: "Теодор",
      lastName: "Мотсбес",
      phone: "+380956319522",
      gender: "male",
      description: "Ted can be easily described as a hopeless romantic, being a strong believer in destiny and constantly searches for his soul mate believing that fate will eventually cause their meeting.",
      messages: "None of us can vow to be perfect. In the end all we can do is promise to love each other with everything we've got. Because love's the best thing we do.​​​​"
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
        {filteredContacts.map(contact =>
        <Link to={`/cursor.edu-hw-react-router/contacts/${contact.firstName}`}>
          <Contact {...contact} />
        </Link> 
        )}
      </div>
    )
  }

}

export default Contacts;