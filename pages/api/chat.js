
// export const config = {
//   runtime: 'edge',
// };

export default async function handler(req,res) {

  console.log("Getting request")

  console.log(req.body)
  

  try{
      let question = req.body
      
      console.log(question.question)

      let response = await fetch('http://127.0.0.1:8000/answer', { // http://0.0.0.0:8000/get_context
          method: "POST",
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({question: question.question })
      })

      let context;
      if (response.ok) {
        context = await response.json();
        console.log('Context:', context.content);
      } else {
        console.error('Error:', response.statusText);
      }
      console.log("Context",context)

      // return question.content
      // return res.json({answer: question.question})
      res.status(200).json({answer: context.context})
    }
  catch(e){
    console.error("error:",e)
  }

}
