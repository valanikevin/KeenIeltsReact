// import node module libraries
import { useEffect, useState } from 'react';

const useMultipleSelection = (items) => {
	const [filteredMailsList, setFilteredMailsList] = useState([]);
	const [selectedMails, setSelectedMails] = useState([]);
	const [selectAllMails, setselectAllMails] = useState(false);
	const [indeterminateState, setIndeterminateState] = useState(false);

	// handler for toggle records selection
	const handleToggleSelection = (id) => {
		setSelectedMails(
			selectedMails.includes(id)
				? selectedMails.filter((item) => item !== id)
				: [...selectedMails, id]
		);
	};

	// handler to select records
	const handleToggleSelectAll = () => {
		setselectAllMails(!selectAllMails);
		if (filteredMailsList.length) {
			selectAllMails
				? handleFilteredSelectAll(filteredMailsList)
				: handleFilteredUnselectAll();
		} else {
			setSelectedMails(selectAllMails ? [] : items);
		}
	};

	// handler to select records based on selected filter option
	const handleFilteredSelectAll = (ids) => {
		setSelectedMails(ids);
		setFilteredMailsList(ids);
	};

	// handler to unselect all selected records
	const handleFilteredUnselectAll = () => {
		setSelectedMails([]);
		setFilteredMailsList([]);
	};

	useEffect(() => {
		setselectAllMails(selectedMails.length === items.length);
		setIndeterminateState(
			selectedMails.length > 0 && selectedMails.length < items.length
				? true
				: false
		);
	}, [selectedMails, items]);

	return {
		selectedMails,
		selectAllMails,
		indeterminateState,
		handleToggleSelection,
		handleToggleSelectAll,
		handleFilteredSelectAll,
		handleFilteredUnselectAll
	};
};

export default useMultipleSelection;
