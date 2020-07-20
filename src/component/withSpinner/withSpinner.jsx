import React from 'react';
import Spinner from '../spinner/spinner';

const WithSpinner = WrappedComponent =>{
    const SpinnerComponent = ({ isloading , ...OtherProps}) => {
        return isloading ?(
            <Spinner/>
        ):
        (
            <WrappedComponent {...OtherProps} />
        );
    };
    return SpinnerComponent;
};

export default  WithSpinner;