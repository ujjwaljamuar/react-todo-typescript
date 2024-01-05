import {
    AppBar,
    Button,
    Container,
    Stack,
    TextField,
    Toolbar,
    Typography,
} from "@mui/material";
import TodoItem from "./components/TodoItem";
import { useEffect, useState } from "react";
import { getTodos, saveTodos } from "./utils/feature";

function App() {
    const [todos, setTodos] = useState<TodoItemType[]>(getTodos);

    const [title, setTitle] = useState<TodoItemType["title"]>("");

    const completeHandler = (id: TodoItemType["id"]): void => {
        const newTodos: TodoItemType[] = todos.map((i) => {
            if (i.id === id) {
                i.isCompleted = !i.isCompleted;
            }
            return i;
        });

        setTodos(newTodos);
    };

    const deleteHandler = (id: TodoItemType["id"]): void => {
        const newTodos: TodoItemType[] = todos.filter((i) => i.id !== id);

        setTodos(newTodos);
    };

    const editHandler = (
        id: TodoItemType["id"],
        newTitle: TodoItemType["title"]
    ): void => {
        const newTodos: TodoItemType[] = todos.map((i) => {
            if (i.id === id) {
                i.title = newTitle;
            }
            return i;
        });

        setTodos(newTodos);
    };

    const addTodoHandler = (): void => {
        const newTodo: TodoItemType = {
            id: String(Math.random() * 1000),
            title,
            isCompleted: false,
        };

        setTodos((prev) => [...prev, newTodo]);
        setTitle("");
    };

    useEffect(() => {
        saveTodos(todos);
    }, [todos]);

    return (
        <Container maxWidth="sm" sx={{ height: "100vh" }}>
            <AppBar position="static">
                <Toolbar>
                    <Typography>Todo App</Typography>
                </Toolbar>
            </AppBar>

            <Stack
                height={"75%"}
                direction={"column"}
                spacing={"1rem"}
                padding={"1rem"}
                sx={{ overflowY: "scroll" }}
            >
                {todos.map((i) => (
                    <TodoItem
                        key={i.id}
                        todo={i}
                        completeHandler={completeHandler}
                        deleteHandler={deleteHandler}
                        editHandler={editHandler}
                    />
                ))}
            </Stack>

            <TextField
                fullWidth
                label={"New Task"}
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                onKeyDown={(e) => {
                    if (e.key === "Enter" && title !== "") {
                        addTodoHandler();
                    }
                }}
            />
            <Button
                variant="contained"
                fullWidth
                sx={{ margin: "1rem 0" }}
                disabled={title === ""}
                onClick={addTodoHandler}
            >
                ADD
            </Button>
        </Container>
    );
}

export default App;
