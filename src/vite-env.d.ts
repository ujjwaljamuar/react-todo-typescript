/// <reference types="vite/client" />

type TodoItemType = {
    id: string;
    title: string;
    isCompleted: boolean;
};

type PropsType = {
    todo: TodoItemType;
    deleteHandler: (id: TodoItemType["id"]) => void;
    completeHandler: (id: TodoItemType["id"]) => void;
    editHandler: (id: TodoItemType["id"], newTitle: TodoItemType["title"]) => void;
};
