import { red } from '@material-ui/core/colors';

const teamStyles = theme => ({
  teamComponent: {
    marginTop: '1rem'
  }, 
  card: {
    maxWidth: 345,
  },
  media: {
    height: '40px', 
    objectFit: 'fill', 
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
});

export { teamStyles }
