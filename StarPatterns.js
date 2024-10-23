//Square Shape

// const squarePattern=()=>{
//     let string=''
//     for(let i=0 ; i<=5 ;i++)
//     {
//         for(let j=0 ;j<=5 ; j++)
//         {
//             string+="*"
//         }
//         string+="\n"
//     }
//     return string
// }

// const result=squarePattern()
// console.log(result);

const leftTriangle = () => {
    let string = '';
    for(let i=0 ;i<=5 ; i++)
            {
                for(let j=0 ; j<=i ;j++)
                {
                    if(i==0 || j==0 || j==i || i==5)
                        {

                            string+="*"
                        }
                        else{
                            string+=" "
                        }
                }
                string+="\n"
            }
    return string
}

const result = leftTriangle()
console.log(result);




//Hollow Square Pattern

// const hollowSquare=()=>{
//     let string='';
//     for(let i=0; i<=5 ; i++)
//     {
//         for(let j=0 ; j<=5 ; j++)
//         {
//           if(i==0 || i==5 || j==0 || j==5)
//           {
//             string+="*"
//           }
//           else{
//             string+=" "
//           }
//         }
//         string+="\n"
//     }
//     return string
// }

// const result=hollowSquare()
// console.log(result);

// Left Traingle Pattern

// const leftTriangle = () => {

//     let string = '';
//     for (let i = 0; i <= 5; i++) {
//         for(let j=0; j<=i ; j++)
//         {
//             string+="*"
//         }
//         string+="\n"
//     }
//     return string

// }

// const result = leftTriangle()
// console.log(result);

//Right Triangle Pattern


// const rightTriangle=()=>{
//     let string=''
//     for(let i=0 ;i<=5  ;i++)
//     {
//         for(let j=0 ; j<=5-i ;j++){
//             string+=" "
//         }

//         for(let k=0 ; k<=i ;k++)
//         {
//             string+="*"

//         }
//         string+="\n"
//     }
//     return string
// }

// const result = rightTriangle()
// console.log(result);

//ANOTHER METHOD

// const rightTriangle = () => {
//     let string = ''

//     for (let i = 0; i < 5; i++) {
//         for (let j = 0; j < 5; j++) {
//             if(j>=5-i-1)
//             {
//                 string+="*"
//             }
//             else{
//                 string+=" "
//             }
//         }
//         string+="\n"
//     }
//     return string
// }
// const result = rightTriangle()
// console.log(result);

//Downward Triangle Pattern

// const downwardTriangle=()=>{
//     let string=""

//     for(let i=0 ;i<=5 ; i++)
//     {
//         for(let j=0 ; j<=5-i ;j++)
//         {
//             string+="*"
//         }
//         string+="\n"
//     }
//     return string
// }

// const result =downwardTriangle()
// console.log(result);


//Hollow Triangle Pattern


// const hollowTriangle=()=>{
//     let string=""
// for(let i=0 ;i<=5 ;i++)
// {
//     for(let j=0 ; j<=i; j++)
//     {
//         if(j == 0 || j==i || i== 5)
//         {
//             string+="*"
//         }
//         else{
//             string+=" "
//         }
//     }
//     string+="\n"
// }
//         return string
//     }


// const result =hollowTriangle()
// console.log(result);

//Payramind Pattern

// const payramind=()=>{

//     let string=""
//     for(let i=1 ; i<=5  ;i++)
//     {
//         for(let j=1 ;j<=5-i ;j++)
//         {
//             string +=" "
//         }

//         for(let k=1; k<=2*i-1; k++)
//         {
//             string+="*"
//         }
//         string+="\n"
//     }
//     return string
// }

// const result =payramind()
// console.log(result);
