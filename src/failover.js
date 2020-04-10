const failover = async () =>{
    let URL = {
      aws : 'http://localhost:3000',
      azure : 'http://localhost:7071'
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

module.exports = {
    failover
}