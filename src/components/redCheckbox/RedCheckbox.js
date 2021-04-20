import React from 'react';
import withStyles from "@material-ui/core/styles/withStyles";
import Checkbox from "@material-ui/core/Checkbox";

const RedCheckBox = withStyles({
    root: {
        color: '#f04d2d',
        '&$checked': {
            color: '#f04d2d',
        },
    },
    checked: {},
})((props) =>
    <Checkbox color="default" {...props} />);

export default RedCheckBox;