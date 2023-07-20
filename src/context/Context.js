import { createContext } from 'react';
import { settings } from 'AppConfig';
export const MailContext = createContext({ mails: [] });
export const ChatContext = createContext();
export const TaskKanbanContext = createContext({
	taskColumns: [],
	tasks: []
});
export const AppConfigContext = createContext(settings);
