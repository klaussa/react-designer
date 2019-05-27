export default ({object, startPoint, mouse}) => {
    //Return object of trailing Path here.  
  
    let {objectX, objectY, clientX, clientY} = startPoint;
    let sx= objectX; let sy=objectY;
    let dx = mouse.x //- clientX;
    let dy = mouse.y //- clientY;
  
    return {
      ...object,
      sx,
      sy,
      dx,
      dy
    };

  };