import { ChangeEvent, Dispatch, MouseEvent, SetStateAction } from "react"
import {
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Button,
  Autocomplete,
  Box,
} from "@mui/material"
import { EventFormData, ITodo } from "./EventCalendar"

interface IProps {
  open: boolean
  handleClose: Dispatch<SetStateAction<void>>
  eventFormData: EventFormData
  setEventFormData: Dispatch<SetStateAction<EventFormData>>
  onAddEvent: (e: MouseEvent<HTMLButtonElement>) => void
  todos: ITodo[]
}

const AddEventModal = ({ open, handleClose, eventFormData, setEventFormData, onAddEvent, todos }: IProps) => {
  const { description } = eventFormData

  const onClose = () => handleClose()

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEventFormData((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }))
  }

  const handleTodoChange = (e: React.SyntheticEvent, value: ITodo | null) => {
    setEventFormData((prevState) => ({
      ...prevState,
      todoId: value?._id,
    }))
  }

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Добавление события</DialogTitle>
      <DialogContent>
        <DialogContentText>Чтобы добавить событие, пожалуйста, заполните информацию ниже.</DialogContentText>
        <Box component="form">
          <TextField
            name="description"
            value={description}
            margin="dense"
            id="description"
            label="Описание"
            type="text"
            fullWidth
            variant="outlined"
            onChange={onChange}
          />
          <Autocomplete
            onChange={handleTodoChange}
            disablePortal
            id="combo-box-demo"
            options={todos}
            sx={{ marginTop: 4 }}
            getOptionLabel={(option) => option.title}
            renderInput={(params) => <TextField {...params} label="Действие" />}
          />
        </Box>
      </DialogContent>
      <DialogActions>
        <Button color="error" onClick={onClose}>
          Отмена
        </Button>
        <Button disabled={description === ""} color="success" onClick={onAddEvent}>
          Добавить
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default AddEventModal
