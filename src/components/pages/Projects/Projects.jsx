import React from 'react'
import './projects.css'
const Projects = ({id,img,link}) => {
  return (
    <div className='cards' key={id}>
        <div className='card'>
            <div className='card-circle'></div>
            <div className='card-circle'></div>
            <div className='card-circle'></div>
        </div>
        <a href={link} target={"_blank"}>
            <img src={img} alt='' className='card-image'></img>
        </a>
    </div>

  )
}

export default Projects
// <!DOCTYPE html>
// <html lang="en">
//   <head>
//     <meta charset="UTF-8" />
//     <meta http-equiv="X-UA-Compatible" content="IE=edge" />
//     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//     <link rel="stylesheet" href="style.css" />
//     <link
//       rel="stylesheet"
//       href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
//     />
//     <title>Document</title>
//   </head>
//   <body>
//     <h1 class="convert-text">Convert To Hebrew</h1>
//     <form class="convert-form">
//       <input
//         class="convert-input"
//         id="day"
//         inputmode="numeric"
//         type="text"
//         placeholder="Day"
//         required
//       />
//       <input
//         class="convert-input"
//         id="month"
//         type="text"
//         min="1"
//         max="12"
//         placeholder="Month"
//         required
//       />
//       <input
//         class="convert-input"
//         id="year"
//         inputmode="numeric"
//         minlength="4"
//         maxlength="4"
//         type="text"
//         placeholder="Year"
//         required
//       >
//       <button class="convert-button" type="button" onclick="clickHandlle()">
//         convert <i class="fa fa-exchange" aria-hidden="true"></i>
//       </button>
//     </form>
//     <h1 class="convert-text" id="date"></h1>
//     <script>
//       const clickHandlle = () => {
//         fetch(
//           `https://www.hebcal.com/converter?cfg=json&gy=${year.value}&gm=${month.value}&gd=${day.value}&g2h=1`
//         )
//           .then((res) => res.json())
//           .then((res) =>
//             res.hebrew == undefined
//               ? alert(
//                   "One or more of the details is incorrect.Please enter a valid date"
//                 )
//               : (document.getElementById("date").innerHTML = res.hebrew)
//           )
//           .catch((err) => console.log(err));
//       };
//     </script>
//   </body>
// </html>
// body{
//   background-color: rgba(0, 0, 0, 0.027);
// }
// .convert-text{
//   text-align: center;
//   font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
//   font-weight: bold;
//   color: #1f2235;
// }
// .convert-form{
//   display: flex;
//   align-items: center;
//   justify-content: center;
// }
// .convert-input{
//   margin: 5px;
//   line-height: 30px;
//   border: 1px solid #ccc;
//   border-radius: 4px;
//   font-size: 14px;
//   padding: 0 8px;
//   color: #666;
//   width: 200px;
// }
// .convert-button{
//   color: white;
//   border: 2px solid white;
//   font-size: 14px;
//   line-height: 30px;
//   width: 120px;
//   background-color: #1f2235;
//   cursor: pointer;
//   border-radius: 5px;
// }
// .convert-button:hover{
//   background-color:#666 ;
// }

// @media screen and (max-width:750px) {
//   .convert-input{
//       width: 50px;
//       margin: 2px;
//   }
  
// }body{
//     background-color: rgba(0, 0, 0, 0.027);
// }
// .convert-text{
//     text-align: center;
//     font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
//     font-weight: bold;
//     color: #1f2235;
// }
// .convert-form{
//     display: flex;
//     align-items: center;
//     justify-content: center;
// }
// .convert-input{
//     margin: 5px;
//     line-height: 30px;
//     border: 1px solid #ccc;
//     border-radius: 4px;
//     font-size: 14px;
//     padding: 0 8px;
//     color: #666;
//     width: 200px;
// }
// .convert-button{
//     color: white;
//     border: 2px solid white;
//     font-size: 14px;
//     line-height: 30px;
//     width: 120px;
//     background-color: #1f2235;
//     cursor: pointer;
//     border-radius: 5px;
// }
// .convert-button:hover{
//     background-color:#666 ;
// }
 
// @media screen and (max-width:750px) {
//     .convert-input{
//         width: 50px;
//         margin: 2px;
//     }
    
// }