import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  root: {
    boxShadow: '2px 2px 5px rgba(33,33,33,0.3)',
    '&:hover': {
      boxShadow: '2px 2px 5px rgba(33,33,33,0.6)',
    },
  },
  media: {
    height: 260,
  },
  cardContent: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  cartActions: {
    justifyContent: 'space-between',
  },
  buttons: {
    display: 'flex',
    alignItems: 'center',
  },
}));
