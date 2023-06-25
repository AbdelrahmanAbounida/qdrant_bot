import { useState, useRef, useEffect } from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Image from 'next/image'
import ReactMarkdown from 'react-markdown'
import CircularProgress from '@mui/material/CircularProgress';
import {GiCoilingCurl} from 'react-icons/gi'
import axios from 'axios'
import Header from '@/components/home/Header'
import { nanoid } from 'nanoid'
import { useContext } from 'react'
import { MessagesContext } from '@/context/ChatContext'
import { useMutation } from 'react-query'

export default function Home() {

  const [userInput, setUserInput] = useState("");
  const [loading, setLoading] = useState(false);
 
  const {messages,isMessageUpdating,addMessage,removeMessage,updateMessage,setIsMessageUpdating,} = useContext(MessagesContext)

  const messageListRef = useRef(null);
  const textAreaRef = useRef(null);


const sendMessage = async()=>{

    const message = {
      id: nanoid(),
      isUserMessage: true,
      text: userInput
  }
    setUserInput('')
    addMessage(message)
    setIsMessageUpdating(true)
    
    let ans_msg_id = nanoid()
    let message2 = {
      id: ans_msg_id ,
      isUserMessage: false,
      text: ''
    }
    addMessage(message2)

    let data = JSON.stringify({
      "question": userInput
    });
    
    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: '/api/chat',
      headers: { 
        'Content-Type': 'application/json'
      },
      data : data
    };
    
    axios.request(config)
    .then((response) => {
      updateMessage(ans_msg_id,(prev)=>prev+response.data.answer)
      setIsMessageUpdating(false)
    })
    .catch((error) => {
      console.log(error);
    });

    

    // const response = await fetch('/api/chat', {
    //     method: "POST",
    //     headers: {
    //         'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify({question: message.text })
    // })

    // console.log("Response is *************",response.body)

    // return response.body

} 

const handleEnter = (e)=>{
  if(e.key === 'Enter' && !e.shiftKey){
    e.preventDefault();

    const message = {
        id: nanoid(),
        isUserMessage: true,
        text: userInput,
        }

    sendMessage(message)
}
}

const handleSubmit = (e)=>{
  e.preventDefault();
    const message = {
        id: nanoid(),
        isUserMessage: true,
        text: userInput,
      }
      setUserInput('')
    sendMessage(message)
}

  // Auto scroll chat to bottom
  useEffect(() => {
    const messageList = messageListRef.current;
    messageList.scrollTop = messageList.scrollHeight;
  }, [messages]);

  // Focus on text field on load
  useEffect(() => {
    textAreaRef.current.focus();
  }, []);


  return (
    <>
      <Head>
        <title>Chat With Qdrant</title>
        <meta name="description" content="LangChain documentation chatbot" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>


    <Header />

      <main className={styles.main}>
      <div className = {styles.cloud}>
        <div ref={messageListRef} className = {styles.messagelist}>
        {messages.map((message, index) => {
          return (
            // The latest message sent by the user will be animated while waiting for a response
              <div className='overflow-y-auto '>
                      <div key = {index} className = {message.isUserMessage && loading && index === messages.length - 1  ? styles.usermessagewaiting : !message.isUserMessage ? styles.apimessage : styles.usermessage}>
                      {/* Display the correct icon depending on the message type */}
                      {!message.isUserMessage ? <GiCoilingCurl className="sm:w-9 mr-3 sm:h-7 w-5 h-5 text-indigo-600 "/> : <Image src = "/usericon.png" alt = "Me" width = "30" height = "30" className = {styles.usericon} priority = {true} />}
                    <div className = {styles.markdownanswer}>
                      {/* Messages are being rendered in Markdown format */}
                      <ReactMarkdown linkTarget = {"_blank"}>{message.text}</ReactMarkdown>
                      </div>
                    </div>
                </div>
          )
        })}
        </div>
            </div>
           <div className={styles.center}>
            
            <div className = {styles.cloudform}>
           <form onSubmit = {e => handleSubmit(e)}>
              <textarea 
                  disabled = {loading}
                  onKeyDown={e => handleEnter(e)}
                  ref = {textAreaRef}
                  autoFocus = {false}
                  rows = {1}
                  maxLength = {512}
                  type="text" 
                  id="userInput" 
                  name="userInput" 
                  placeholder = {loading? "Waiting for response..." : "Type your question..."}  
                  value = {userInput} 
                  onChange = {e => setUserInput(e.target.value)} 
                  className = {styles.textarea}
                  />
                    <button 
                        type = "submit" 
                        disabled = {loading}
                        className = {styles.generatebutton}
                        >
                      {loading ? <div className = {styles.loadingwheel}><CircularProgress color="inherit" size = {20}/> </div> : 
                     
                      <svg viewBox='0 0 20 20' className={styles.svgicon} xmlns='http://www.w3.org/2000/svg'>
                      <path d='M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z'></path>
                    </svg>}
                    </button>
                    </form>
                    </div>
        </div>
      </main>
    </>
  )
}
