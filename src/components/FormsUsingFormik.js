import React from 'react'
import { useFormik } from 'formik';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));
function FormsUsingFormik() {
  const [data, setdata] = React.useState("");
  const classes = useStyles();

  const formik = useFormik({
    initialValues: {
      email: '',
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
      setdata(values)
    },
  });
  console.log(data)
  
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
       {/* <label htmlFor="email">Email Address</label> */}
       <TextField label="Outlined" variant="outlined"
         id="email"
         name="email"
         type="email"
         onChange={formik.handleChange}
         value={formik.values.email}
       />
       <button type="submit">Submit</button>
     </form>
    </div>
  )
}

export default FormsUsingFormik

//************without using formik library */
// export default FormsUsingFormik
// import React,{useState} from 'react'

// function FormsUsingFormik() {
//   const [data, setdata] = useState("");
  
//   const handleSubmit = (evt) => {
//       evt.preventDefault();
//      console.log(`Submitting Name ${data}`)
//   }
//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//       <label>
//         Frirst Name:
//         <input
//           type="text"
//           value={data}
//           onChange={e => setdata(e.target.value)}
//         />
//       </label>
//       <button type="submit">Submit</button>
//     </form>
//     </div>
//   )
// }


