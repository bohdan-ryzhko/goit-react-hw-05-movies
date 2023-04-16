import { Form, StyledLabel, StyledInput } from "./SearchForm.styled";

export const SearchForm = ({ setSearchQuery }) => {

	const onSubmitForm = event => {
		event.preventDefault();
		const form = event.currentTarget;
		const params = { query: form.elements.searchValue.value }
		setSearchQuery(params);
		form.reset();
	}

	return (
		<Form onSubmit={onSubmitForm}>
			<StyledLabel htmlFor="searchValue">
				<StyledInput
					id="searchValue"
					type="text"
					name="searchValue" />
			</StyledLabel>
			<button type="submit">Search</button>
		</Form>
	)
}