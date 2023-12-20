import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import './Alert.css'

export default function DescriptionAlert() {
  return (
      <Alert severity="success">
        <AlertTitle>Success</AlertTitle>
        Travel Planning Name Saved
      </Alert>
  );
}
