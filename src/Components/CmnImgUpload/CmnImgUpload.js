import React from 'react';

const CmnImgUpload = (props) => {
    const handleImageUpload=(e)=>{
console.log(e);
    }

    return (
        <div>
            <input type="file" onChange={(e)=>handleImageUpload(e)}  />
        </div>
    );
};

export default CmnImgUpload;