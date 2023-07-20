// import node module libraries
import React, { useReducer } from 'react';

// import context file
import { TaskKanbanContext } from 'context/Context';

// import data files
import {
	TeamMembers,
	TaskKanbanItems
} from 'data/dashboard/task-kanban/TaskKanbanData';

// import reducer file
import { TaskKanbanReducer } from 'reducers/TaskKanbanReducer';

const TaskKanbanProvider = ({ children }) => {
	const [TaskKanbanState, TaskKanbanDispatch] = useReducer(TaskKanbanReducer, {
		teamMembers: TeamMembers,
		taskList: TaskKanbanItems
	});

	return (
		<TaskKanbanContext.Provider value={{ TaskKanbanState, TaskKanbanDispatch }}>
			{children}
		</TaskKanbanContext.Provider>
	);
};

export default TaskKanbanProvider;
