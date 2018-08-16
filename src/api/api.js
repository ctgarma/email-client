import axios  from 'axios';

//const EMAIL_URL ='http://localhost:3700/email';

const EMAIL_URL = process.env.NODE_ENV === 'production' ? process.env.REACT_APP_PROD_API_URL : process.env.REACT_APP_DEV_API_URL;

function sendEmail (data){
    console.log(EMAIL_URL);
     return axios({
        method:'post',
        url:EMAIL_URL,
        data:data
    }).then((res)=>{         
        return ('Email sent');
    }).catch((e)=>{         
        throw new Error('Email not sent');
    }) 
}

export {sendEmail};