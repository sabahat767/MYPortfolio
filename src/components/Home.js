import React from 'react'
//import {useTransition, animated} from 'react-spring'

import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Button from '@material-ui/core/Button';
import { useSpring, animated } from 'react-spring'; // web.cjs is required for IE 11 support
import Trails from './Trails';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import reactImg from './images/react.jpg'
import background from './images/bg.jpg'
import CodeIcon from '@material-ui/icons/Code';
import SimpleCard from '../components/Card'
const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  root: {
  
    maxWidth: 752
    
  },
 
  
}));

const Fade = React.forwardRef(function Fade(props, ref) {
  const { in: open, children, onEnter, onExited, ...other } = props;
  const style = useSpring({
    from: { opacity: 0 },
    to: { opacity: open ? 1 : 0 },
    onStart: () => {
      if (open && onEnter) {
        onEnter();
      }
    },
    onRest: () => {
      if (!open && onExited) {
        onExited();
      }
    },
  });

  return (
    <animated.div ref={ref} style={style} {...other}>
      {children}
    </animated.div>
  );
});

Fade.propTypes = {
  children: PropTypes.element,
  in: PropTypes.bool.isRequired,
  onEnter: PropTypes.func,
  onExited: PropTypes.func,
};

function Home() {

    const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const [openn, set] = React.useState(true)
  

return (
<div >
   
      <Trails open={openn} onClick={() => set((state) => !state)} style={{backgroundImage:`url(${background})`,backgroundRepeat: 'no-repeat',backgroundSize:'cover'}}>
          <span>Sabahat Sabir Khan </span>
          <span>
          <ListItem style={{backgroundColor:"#e91e63",borderRadius:'10px',color:'white',maxHeight:'275px'}}>
        <ListItemAvatar>
          <Avatar>
            
            < CodeIcon />
          </Avatar>
        </ListItemAvatar>
        {/* <ListItemText primary="Skills" /> */}
        <List>
                  <ListItemText
                    primary="React Developer"
                  />
                    
            </List>
      </ListItem >
               {/* <img src={reactImg}/> */}
          </span>
<span>

           
       
</span>
         
     
    </Trails>

    <SimpleCard/>
</div>
)
}
export default Home;
