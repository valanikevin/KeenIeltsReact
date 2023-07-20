// import node module libraries
import { useContext } from 'react';

// import context file
import { TaskKanbanContext } from 'context/Context';

const useTaskKanban = () => {
	const {
		TaskKanbanState: { taskList },
		TaskKanbanDispatch
	} = useContext(TaskKanbanContext);

	const handleDragEnd = (result) => {
		const { destination, source } = result;

		// If user is trying to drop element outside availalble columns areas
		if (!destination) {
			console.log(
				'You can drop item in one of available destinations or columns'
			);
			return;
		}

		// If user is trying to drop element in the same column area with the same current location or position
		if (
			destination.droppableId === source.droppableId &&
			destination.index === source.index
		) {
			console.log('Source and destination column and index(location) are same');
			return;
		}

		const start = taskList[source.droppableId];
		const finish = taskList[destination.droppableId];

		if (start === finish) {
			// If user is dropping in the same column
			const newTaskIds = Array.from(start.taskIds);
			const swapTask = newTaskIds[source.index];
			newTaskIds.splice(source.index, 1);
			newTaskIds.splice(destination.index, 0, swapTask);
			const newColumnsState = taskList.map((item) => {
				if (item.id === start.id) {
					item.taskIds = newTaskIds;
					return item;
				} else return item;
			});
			const rearrangeColumnsState = [...newColumnsState];
			TaskKanbanDispatch({
				type: 'REARRANGE_TASK',
				payload: { rearrangeColumnsState }
			});
		} else {
			// If user is dropping in another column
			const startTaskIds = Array.from(start.taskIds);
			const [item] = startTaskIds.splice(source.index, 1);
			const finishTaskIds = Array.from(finish.taskIds);
			finishTaskIds.splice(destination.index, 0, item);
			const newColumnsState = taskList.map((item) => {
				if (item.id === start.id) {
					item.taskIds = startTaskIds;
					return item;
				} else if (item.id === finish.id) {
					item.taskIds = finishTaskIds;
					return item;
				} else return item;
			});
			const rearrangeColumnsState = [...newColumnsState];
			TaskKanbanDispatch({
				type: 'REARRANGE_TASK',
				payload: { rearrangeColumnsState }
			});
		}
	};

	return {
		handleDragEnd
	};
};

export default useTaskKanban;
