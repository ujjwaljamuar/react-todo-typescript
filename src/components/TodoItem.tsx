import { Delete } from "@mui/icons-material";
import {
    Button,
    Checkbox,
    Paper,
    Stack,
    TextField,
    Typography,
} from "@mui/material";
import { useState } from "react";

const TodoItem = ({
    todo,
    completeHandler,
    deleteHandler,
    editHandler,
}: PropsType) => {
    const [editActive, setEditActive] = useState<boolean>(false);
    const [textVal, setTextVal] = useState<TodoItemType["title"]>(todo.title);

    return (
        <Paper sx={{ padding: "1rem" }}>
            <Stack direction={"row"} alignItems={"center"}>
                {editActive ? (
                    <TextField
                        sx={{ marginRight: "auto" }}
                        value={textVal}
                        onChange={(e) => setTextVal(e.target.value)}
                        onKeyDown={(e) => {
                            if (textVal !== "" && e.key === "Enter") {
                                editHandler(todo.id, textVal);
                                setEditActive(false);
                            }
                        }}
                    />
                ) : (
                    <Typography marginRight={"auto"}>{todo.title}</Typography>
                )}
                <Checkbox
                    checked={todo.isCompleted}
                    onChange={() => completeHandler(todo.id)}
                />

                <Button
                    sx={{ color: "black", opacity: 0.6 }}
                    onClick={() => deleteHandler(todo.id)}
                >
                    <Delete />
                </Button>

                <Button
                    sx={{ fontWeight: "600" }}
                    onClick={() => setEditActive((prev) => !prev)}
                >
                    {editActive ? "DONE" : "EDIT"}
                </Button>
            </Stack>
        </Paper>
    );
};

export default TodoItem;
