const failover = async () =>{
    let URL = {
      aws : 'https://6lez2g41n0.execute-api.us-east-1.amazonaws.com',
      azure : 'sls-neur-dev-multiclouddeploymentblog.azurewebsites.net'
    }
    try{
      const data = await fetch(`${URL.aws}/dev/status`);
      console.log(data);
      return URL.aws;
    }catch(err){
      console.log(err);
      return URL.azure;
    }
  }

export default failover;