import React from 'react';
import './FormMovie.css';
import axios from 'axios';

const url = 'https://post-a-form.herokuapp.com/api/movies/';

class FormMovie extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          title: '',
          poster: '',
          comm: '',
        }
        this.onChange = this.onChange.bind(this);
        this.submitForm = this.submitForm.bind(this);
      }

      onChange(e) {
        this.setState({
          [e.target.name]: e.target.value,
        });
      }

      submitForm(e) {
        e.preventDefault();
        axios.post(url, this.state)
        .then(res => res.data)
        .then(res => {
            alert(`Employé ajouté avec l'ID ${res.id} !`);
        })
        .catch(e => {
            console.error(e);
            alert(`Erreur lors de l'ajout d'un employé : ${e.message}`);
        });
      }

      render(){
          return (
          <>
          <div className="FormEmployee">
            <h1>Saisie d'un employé</h1>

            <form onSubmit={this.submitForm}>
                <fieldset>
                <legend>Informations</legend>
                <div className="form-data">
                    <label htmlFor="title">Nom</label>
                    <input
                    type="text"
                    id="title"
                    name="title"
                    onChange={this.onChange}
                    value={this.state.title}
                    />
                </div>

                <div className="form-data">
                    <label htmlFor="poster">Prénom</label>
                    <input
                    type="text"
                    id="poster"
                    name="poster"
                    onChange={this.onChange}
                    value={this.state.poster}
                    />
                </div>

                <div className="form-data">
                    <label htmlFor="comm">E-mail</label>
                    <input
                    type="comm"
                    id="comm"
                    name="comm"
                    onChange={this.onChange}
                    value={this.state.comm}
                    />
                </div>
                <hr />
                <div className="form-data">
                    <input type="submit" value="Envoyer" />
                </div>
                </fieldset>
            </form>
            </div>
          </>
          );
      }
}

export default FormEmployee;