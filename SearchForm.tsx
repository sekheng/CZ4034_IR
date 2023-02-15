import * as React from 'react';
import Button from 'react-bootstrap/Button';

interface SearchFState {
    message: string;
}

class SearchForm extends React.Component<{}, SearchFState> {
    state = {
        message: '',
    };

    handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(`Name: ${this.state.message}`);
    };

    handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        this.setState({ [name]: value } as Pick<
            SearchFState,
            keyof SearchFState
        >);
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <input
                        type="text"
                        id="message"
                        name="message"
                        className="input-style"
                        placeholder="Type in your favourite ticker such as 'TSLA'"
                        value={this.state.message}
                        onChange={this.handleChange}
                    />
                    <Button type="submit">Search</Button>
                </div>
            </form>
        );
    }
}

export default SearchForm;
