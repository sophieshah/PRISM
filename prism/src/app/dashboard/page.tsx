'use client';
import {useState} from 'react'

export default function Dashboard() {

  const [messages, setMessages] = useState([
    { role: 'assistant', content: 'Hi there! How can I help you today?' },
  ]);

  const [input, setInput] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if(!input.trim()) return;

    const userMessage = { role: 'user', content: input };
    setMessages([...messages, userMessage]);
    setInput('');
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Top Navigation */}
      <header className="bg-white shadow px-6 py-4 flex justify-between items-center border-b">
        <h1 className="text-xl text-blue-700 font-bold ">PRISM</h1>
        <div className="flex items-center gap-4">
          <span className="text-gray-700">Hello, User</span>
          <button className="text-sm bg-blue-700 hover:bg-gray-300 px-3 py-1 rounded">
            User Info
          </button>
        </div>
      </header>

      
      <div className="flex flex-1">
        <aside className="w-40 bg-gray-100 p-4 border-r">
          <nav className="space-y-4">
            <a href="#" className="block text-gray-800 hover:text-blue-600">
              Home
            </a>
            <a href="#" className="block text-gray-800 hover:text-blue-600">
              Chat
            </a>
            <a href="#" className="block text-gray-800 hover:text-blue-600">
              Chat History
            </a>
            <a href="#" className="block text-gray-800 hover:text-blue-600">
              My Files
            </a>
            <a href="#" className="block text-gray-800 hover:text-blue-600">
              Dashboard
            </a>
          </nav>
        </aside>

    
    
    <main className="flex-1 p-6 bg-gray-50 space-y-6">
      {/* Chat Panel */}
      <section className="bg-white p-6 rounded-lg shadow flex flex-col h-[500px]">
        <h2 className="text-lg text-black-700 font-semibold mb-4">Chat</h2>

        {/* Chat message display */}
        <div className="flex-1 overflow-y-auto space-y-4 pr-2">
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`max-w-xs px-4 py-2 rounded-lg text-sm ${
                msg.role === 'user'
                  ? 'bg-blue-500 text-white self-end ml-auto'
                  : 'bg-gray-200 text-gray-900 self-start mr-auto'
              }`}
            >
              {msg.content}
            </div>
          ))}
        </div>

        {/* Chat input */}
        <form onSubmit={handleSubmit} className="mt-4 flex items-center gap-2">
          <input
            type="text"
            className="flex-1 border rounded px-4 py-2 focus:outline-none focus:ring focus:border-blue-300"
            placeholder="Type your message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Send
          </button>
        </form>
      </section>
    </main>

          {/* Bottom panel
          <section className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-lg font-semibold mb-2">Bottom Panel</h2>
            <p className="text-gray-600">This is the content for the bottom panel.</p>
          </section> */}
      </div>
    </div>
  );
}
