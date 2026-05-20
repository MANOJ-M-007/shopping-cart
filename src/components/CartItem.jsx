import { Card, CardContent, Typography, Button, Stack } from "@mui/material";

import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

function CartItem({ item, removeItem, editItem }) {
  return (
    <Card sx={{ mb: 2 }}>
      <CardContent>
        <Typography variant="h6">{item.name}</Typography>

        <Typography sx={{ mb: 2 }}>₹ {item.price}</Typography>

        <Stack direction="row" spacing={2}>
          <Button
            variant="outlined"
            startIcon={<EditIcon />}
            onClick={() => editItem(item)}
          >
            Edit
          </Button>

          <Button
            variant="contained"
            color="error"
            startIcon={<DeleteIcon />}
            onClick={() => removeItem(item.id)}
          >
            Remove
          </Button>
        </Stack>
      </CardContent>
    </Card>
  );
}

export default CartItem;
