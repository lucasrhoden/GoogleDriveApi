import React, {useState, useEffect, useCallback} from 'react';
import { Redirect } from "react-router-dom";
import { TextField, Button } from '@material-ui/core';
import SaveIcon from '@material-ui/icons/Save';
import SyncIcon from '@material-ui/icons/Sync';
import CancelPresentationIcon from '@material-ui/icons/CancelPresentation';
import { Formik } from 'formik';
import * as Yup from 'yup';
import axios from "axios";

import "./Form.css"
import Results from "../Results/Results"

function Form() {

    const [files, setfiles] = useState([]);
    const [user, setuser] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [isLogout, setIsLogout] = useState(false)

    useEffect(() => {
        axios.get(
            'http://localhost:9000/profile',
          ).then(res => {
              console.log(res.data.name)
              setuser(res.data.name)
          }).catch(err => console.log(err));
    }, [])

    useEffect(() => {
        axios.get(
            'http://localhost:9000/files',
          ).then(res => {
              console.log(res.data.files)
              setfiles(res.data.files)
              setIsLoading(false)
          }).catch(err => console.log(err));
    }, [])

    useCallback(() => {
        setfiles(files)
    }, [files])

    const handleLogout = () => {
        axios({
            method:"GET",
            url: "http://localhost:9000/logout"
        }).then(res => {
            console.log(res.data)
        }).catch(err => console.log(err))
        setIsLogout(true)
    }

    const fruitSchema = Yup.object().shape({
        fruit: Yup.string()
          .min(1, 'Too Short!')
          .required('Required')
    })

    const filesArray = files.map(file => (
        <Results key={file.id} title={file.name} id={file.id} />
    ))

    return (
        <div className="form">
            {isLogout ? <Redirect to="/" /> : null}
            <h3>Hello, <i>{user}</i></h3>
            <CancelPresentationIcon onClick={handleLogout} />
            <hr />
            <h5>Tell us what is your favorite fruit:</h5>
            <Formik
                initialValues={{ fruit: '' }}
                validationSchema={fruitSchema}
                onSubmit={(values, { setSubmitting }) => {
                    var config = {
                        method: 'post',
                        url: `http://localhost:9000/copy?fruit=${values.fruit}`,
                        headers: { }
                      };
                      
                    axios(config)
                      .then(function (response) {
                        console.log(JSON.stringify(response.data));
                        setSubmitting(false);
                        setIsLoading(false);
                      })
                      .catch(function (error) {
                        console.log(error);
                        setSubmitting(false);
                        setIsLoading(false);
                      });
                    
                }}
            >
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting,
                    /* and other goodies */
                }) => (
                    <form className="form_body" onSubmit={() => handleSubmit()}>
                        {console.log(errors.fruit)}
                        {console.log(touched.fruit)}
                        <TextField
                            label="Favorite Fruit"
                            variant="outlined"
                            type="text"
                            name="fruit"
                            size="small"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.fruit}
                        />
                        <div className="form_btn">
                            <Button
                                type="submit" 
                                disabled={isSubmitting || touched.fruit & errors.fruit === undefined ? false : true }
                                variant="contained"
                                color="primary"
                                size="small"
                                startIcon={<SaveIcon />}
                            >
                                Save doc
                            </Button>
                        </div>
                    </form>
                )}
            </Formik>
            <h3>Files</h3>
            <div className="refresh_btn">
                <Button onClick={() => window.location.reload()}>Refresh<span className="refresh_icon"><SyncIcon /></span></Button>
            </div>
            <div className="results_table">
                {isLoading ? 
                <div className="spinner-border text-primary" role="status" /> :
                filesArray
            }
            </div>
        </div>
    )
}

export default Form
