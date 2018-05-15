import React, { Component } from 'react';
import uuid from 'uuid';

class AddProject extends Component {
	// constructor(props){
	// 	super(props);
	// }

	static defaultProps = {
		categories: ['Web Design', 'Web Development', 'Mobile Development']
	}

	handleSubmit(e){
		e.preventDefault();
		if(this.state.title === ''){
			this.setState({message: "*Title is required"});
		} else {
			this.setState({message: ''});
			this.props.addProject({
				id: uuid.v4(),
				title: this.state.title,
				category: this.state.category
			});
		}
	}
	
  render() {

		let categoryOptions = this.props.categories.map(category => {
			return <option key={category} value='category'>{category}</option>
		});

    return (
      <div>
        <h3>Add Project</h3>
        <form onSubmit={this.handleSubmit.bind(this)}>
            <div>
                <label>Title</label>
                <br />
								<input 
									type='text'
									value={this.state.title} 
									onChange={(e) => {this.setState({title: e.target.value})}}
								/>
								<span>{this.state.message}</span>
            </div>
            <div>
                <label>Category</label>
                <br />
								<select
									value={this.state.category}
									onChange={(e) => {this.setState({category: e.target.value})}}
								>
									{categoryOptions}
                </select>
            </div>
						<br />
						<input type='submit' value='Submit' />
        </form>
      </div>
    );
  }
}

export default AddProject;
