import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  root: {
    // maxWidth: 345, original width style
    maxWidth: '100%',
    boxShadow: '2px 2px 5px rgba(33,33,33,0.3)',
    transition: '0.5s',
    '&:hover': {
      transform: 'scale(1.05)',
      boxShadow: '2px 2px 5px rgba(33,33,33,0.6)',
    },
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  cardActions: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  cardContent: {
    display: 'flex',
    justifyContent: 'space-between',
  },
}));
