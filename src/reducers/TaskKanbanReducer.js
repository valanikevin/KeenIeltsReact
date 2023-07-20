export const TaskKanbanReducer = (state, action) => {
	const { type, payload } = action;
	switch (type) {
		case 'ADD_NEW_TASK':
			return {
				...state,
				taskList: state.taskList.map((column) =>
					column.id === payload.columnno
						? { ...column, taskIds: [...column.taskIds, payload.taskIds] }
						: column
				)
			};
		case 'DELETE_TASK':
			return {
				...state,
				taskList: state.taskList.map((taskItem) => {
					return {
						...taskItem,
						taskIds: taskItem.taskIds.filter((item) => item.id !== payload)
					};
				})
			};
		case 'REARRANGE_TASK':
			return {
				...state,
				taskList: [...payload.rearrangeColumnsState]
			};
		default:
			return state;
	}
};
