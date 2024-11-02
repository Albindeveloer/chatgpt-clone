import NewPrompt from '../../components/newPrompt/NewPrompt'
import './chatPage.css'

const ChatPage = () => {
  return (
    <div className='chatPage'>
      <div className="wrapper">
      <div className="chat">
        <div className="message">test msg frm i</div>
        <div className="message user">test msg frm i</div>
        <div className="message">test msg frm i</div>
        <div className="message user">test msg frm i</div>
        <div className="message">test msg frm i</div>
        <div className="message user">test msg frm i</div>
        <div className="message">test msg frm i</div>
        <div className="message user">test msg frm i</div>
        <div className="message">test msg frm i</div>
        <div className="message user">test msg frm i</div>
        <div className="message">test msg frm i</div>
        <div className="message user">test msg frm i</div>
        <div className="message">test msg frm i</div>
        <div className="message user">test msg frm i</div>
        <div className="message">test msg frm i</div>
        <div className="message user">test msg frm i</div>
        <div className="message">test msg frm i</div>
        <div className="message user">test msg frm i</div>
        <div className="message">test msg frm i</div>
        <div className="message user">test msg frm i</div>
        <NewPrompt/>
      </div>
      </div>
      {/* don't add form component here (enter your query search bar). if we add the form component here it will render the entire compoenet
      whenever we get new response from AI. to prevent this create new component */}

    </div>
  )
}

export default ChatPage